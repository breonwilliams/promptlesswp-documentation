# Database Integration

Understanding how AI Section Builder stores and manages data helps you make informed decisions about backups, migrations, and site management. This guide explains the database structure and provides practical information for site administrators and developers.

## Database Storage Overview

### WordPress-Standard Data Storage

AI Section Builder follows WordPress best practices for data storage:
- **Custom fields (postmeta)** for all section content
- **Options table** for global settings and configuration
- **No custom database tables** - everything uses standard WordPress structures
- **Full compatibility** with WordPress backup and migration tools

### Why This Approach Matters

**Benefits of WordPress-standard storage**:
- **Reliable backups** with any WordPress backup plugin
- **Easy migrations** using standard WordPress tools  
- **No database corruption** risks from custom tables
- **Future-proof** design that works with WordPress updates
- **Developer-friendly** integration with other plugins

## Section Data Structure

### Page-Level Storage

**Each page with AI sections stores**:

```
Post Meta Key: _aisb_sections
Data Structure:
[
  {
    "id": "unique-section-id",
    "type": "hero",
    "content": {
      "eyebrow_heading": "Welcome",
      "heading": "Your Main Headline",
      "content": "<p>Your description content</p>",
      "buttons": [
        {
          "text": "Get Started",
          "url": "/contact",
          "style": "primary"
        }
      ],
      "theme_variant": "light"
    }
  },
  {
    "id": "another-section-id", 
    "type": "features",
    "content": {
      // Features section data
    }
  }
]
```

**Additional meta fields**:
- `_aisb_has_sections`: Boolean flag for quick page identification
- `_aisb_last_modified`: Timestamp of last section update
- `_aisb_version`: Plugin version when sections were last saved

### Global Settings Storage

**Options table entries**:

```
Option Name: aisb_global_settings
Data Structure:
{
  "primary_color": "#3b82f6",
  "text_color": "#1f2937",
  "background_color": "#ffffff",
  "heading_font": "Open Sans",
  "body_font": "Open Sans",
  "smart_accessibility_colors": true,
  // Additional global settings
}
```

**Other plugin options**:
- `aisb_plugin_version`: Current plugin version
- `aisb_user_preferences`: User-specific editor settings
- `aisb_ai_settings`: OpenAI API configuration (if configured)

## Data Volume and Performance

### Typical Storage Requirements

**Per page with sections**:
- **Simple page** (3-5 sections): 5-15 KB
- **Moderate page** (6-10 sections): 15-35 KB  
- **Complex page** (11-15+ sections): 35-75 KB
- **Very efficient** compared to traditional page builders

**For comparison**:
- **WordPress post content**: Usually 2-20 KB
- **AI Section Builder sections**: Similar size to rich content
- **Total overhead**: Minimal impact on database size

### Performance Optimization

**Efficient data handling**:
- **Single database query** retrieves all page sections
- **Lazy loading** for edit interface components
- **Minimal queries** for page rendering
- **Caching-friendly** data structure

**Database query optimization**:
```sql
-- Single query gets all section data for a page
SELECT meta_value FROM wp_postmeta 
WHERE post_id = 123 AND meta_key = '_aisb_sections'

-- Very efficient compared to multiple row queries
```

## Backup and Recovery

### What Gets Backed Up

**Standard WordPress backups include**:
- **All section content** (stored in postmeta table)
- **Global settings** (stored in options table)
- **User preferences** (stored in options table) 
- **Plugin configuration** (stored in options table)

### Backup Verification

**Check your backup includes**:
1. **Database tables**: wp_postmeta and wp_options
2. **Plugin files**: The AI Section Builder plugin directory
3. **Global settings**: Can be verified in WordPress admin
4. **Section content**: Visible in page editor after restore

### Manual Backup Commands

**For direct database access**:
```sql
-- Export all AI Section Builder data
SELECT * FROM wp_postmeta WHERE meta_key LIKE '_aisb_%';
SELECT * FROM wp_options WHERE option_name LIKE 'aisb_%';

-- Count pages with sections
SELECT COUNT(*) FROM wp_postmeta WHERE meta_key = '_aisb_has_sections';
```

## Migration Strategies

### Standard WordPress Migration

**Using WordPress export/import**:
1. **WordPress admin** → Tools → Export
2. **Select "All content"** or specific pages with sections
3. **Download export file** (.xml format)
4. **On new site**: Tools → Import → WordPress
5. **Upload and run** the import process

**What transfers automatically**:
- All section content and configuration
- Page layouts and section arrangements
- Individual section settings and content
- Custom field associations

**What needs manual setup**:
- Plugin installation and activation
- Global settings (colors, fonts, etc.)
- OpenAI API configuration (if used)
- User preferences and editor settings

### Database-Level Migration

**For developers and advanced users**:
```sql
-- Export section data from source site
mysqldump -u username -p database_name wp_postmeta wp_options > backup.sql

-- Import to destination site (after installing plugin)
mysql -u username -p destination_database < backup.sql
```

**Post-migration checklist**:
- [ ] Plugin activated and functioning
- [ ] Global settings configured
- [ ] Test page rendering on frontend
- [ ] Verify editor functionality
- [ ] Check image and media links

### Large Site Migration

**For sites with many pages**:
1. **Use professional migration tools** (WP Engine, Kinsta, etc.)
2. **Migrate in batches** if database is very large
3. **Test with staging site** before live migration
4. **Verify section functionality** after migration
5. **Update any hardcoded URLs** in section content

## Database Maintenance

### Regular Maintenance Tasks

**Recommended monthly**:
- **Backup verification**: Ensure backups include section data
- **Database optimization**: Use tools like WP-Optimize
- **Cleanup unused revisions**: Remove old page revisions
- **Monitor database size**: Track growth over time

**Automated maintenance**:
- Set up automated backups that include custom fields
- Use plugins like WP-Optimize for automatic cleanup
- Monitor site performance for database-related slowdowns
- Keep WordPress and plugins updated

### Data Cleanup

**Removing unused sections**:
- Deleting pages automatically removes associated section data
- WordPress cleanup plugins can remove orphaned custom fields
- Old revision data is automatically managed by WordPress
- No manual database cleanup typically required

**Database optimization queries**:
```sql
-- Find pages with sections
SELECT p.ID, p.post_title 
FROM wp_posts p
JOIN wp_postmeta pm ON p.ID = pm.post_id
WHERE pm.meta_key = '_aisb_has_sections' AND pm.meta_value = '1';

-- Check section data size
SELECT LENGTH(meta_value) as size_bytes, post_id
FROM wp_postmeta 
WHERE meta_key = '_aisb_sections'
ORDER BY size_bytes DESC;
```

## Security Considerations

### Data Protection

**AI Section Builder implements**:
- **Input sanitization** before database storage
- **Capability checks** before data modification
- **WordPress nonces** for form security
- **SQL injection prevention** through WordPress APIs

**Security best practices**:
- Keep WordPress and plugins updated
- Use strong database passwords
- Limit database access to necessary users
- Regular security scans and monitoring

### Access Control

**Database access levels**:
- **Administrators**: Full access to all section data
- **Editors**: Can edit section content on pages they can edit
- **Authors**: Limited to their own pages
- **Custom roles**: Can be configured with capability-based access

## Troubleshooting Database Issues

### Common Problems

**Sections not saving**:
1. **Check user permissions** for editing posts and custom fields
2. **Verify database connectivity** and table integrity
3. **Check server memory limits** for large section configurations
4. **Look for plugin conflicts** affecting custom field saving

**Data corruption or loss**:
1. **Restore from recent backup** if available
2. **Check WordPress revision system** for recoverable content
3. **Verify database table integrity** with hosting provider
4. **Contact support** with specific error details

**Performance issues**:
1. **Monitor database query performance** with plugins like Query Monitor
2. **Check for slow queries** related to custom fields
3. **Optimize database tables** with maintenance plugins
4. **Review server resources** and hosting performance

### Diagnostic Queries

**Check section data integrity**:
```sql
-- Verify section data structure
SELECT post_id, LENGTH(meta_value) as data_size
FROM wp_postmeta 
WHERE meta_key = '_aisb_sections' 
AND meta_value NOT LIKE '[%' -- Find malformed JSON
```

**Performance monitoring**:
```sql
-- Find largest section configurations
SELECT p.post_title, pm.post_id, LENGTH(pm.meta_value) as size
FROM wp_postmeta pm
JOIN wp_posts p ON pm.post_id = p.ID
WHERE pm.meta_key = '_aisb_sections'
ORDER BY size DESC
LIMIT 10;
```

## Developer Integration

### Custom Data Access

**Reading section data**:
```php
// Get all sections for a page
$sections = get_post_meta($post_id, '_aisb_sections', true);

// Check if page has sections
$has_sections = get_post_meta($post_id, '_aisb_has_sections', true);

// Get specific section by type
function get_sections_by_type($post_id, $type) {
    $sections = get_post_meta($post_id, '_aisb_sections', true);
    if (!is_array($sections)) return [];
    
    return array_filter($sections, function($section) use ($type) {
        return $section['type'] === $type;
    });
}
```

**Modifying section data**:
```php
// Add custom data to sections before saving
add_filter('aisb_before_save_sections', function($sections, $post_id) {
    foreach ($sections as &$section) {
        $section['custom_timestamp'] = current_time('timestamp');
    }
    return $sections;
}, 10, 2);
```

### Database Hooks

**Available WordPress hooks**:
```php
// Before section data is saved
do_action('aisb_before_save_sections', $sections, $post_id);

// After section data is saved  
do_action('aisb_after_save_sections', $sections, $post_id);

// Filter section data before rendering
apply_filters('aisb_render_section_data', $section_data, $section_type);
```

## Monitoring and Analytics

### Usage Tracking

**Monitor section usage**:
```sql
-- Count pages using AI Section Builder
SELECT COUNT(DISTINCT post_id) as pages_with_sections
FROM wp_postmeta 
WHERE meta_key = '_aisb_has_sections' AND meta_value = '1';

-- Most popular section types
SELECT 
  JSON_EXTRACT(meta_value, '$[*].type') as section_types,
  COUNT(*) as usage_count
FROM wp_postmeta 
WHERE meta_key = '_aisb_sections'
GROUP BY section_types;
```

### Performance Monitoring

**Track database performance**:
- Monitor query times for pages with many sections
- Watch for slow queries in hosting control panels
- Use performance plugins to track database impact
- Monitor overall site speed and user experience

## Next Steps

Now that you understand database integration:

1. **Review** your current backup strategy to ensure section data is protected
2. **Learn** about [Performance Optimization](performance) for faster loading
3. **Explore** [Advanced Features](../advanced-features/seo-analytics) for enhanced functionality
4. **Consider** your migration strategy if planning site moves

## Need More Help?

- Review [Custom Fields Integration](custom-fields) for WordPress-level data management
- Check [Working with Themes](working-with-themes) for integration context
- Contact hosting provider for database-specific questions
- Read [FAQ](../reference/faq) for common database questions

Remember: AI Section Builder's WordPress-standard database integration ensures your content is secure, portable, and future-proof while providing excellent performance and compatibility!