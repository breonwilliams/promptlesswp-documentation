# Custom Fields Integration

AI Section Builder integrates seamlessly with WordPress custom fields, allowing you to create dynamic, data-driven content that can be managed by team members without technical expertise. This guide explains how custom fields work with the plugin and how to leverage them for more flexible content management.

## Understanding Custom Fields Integration

### What Are Custom Fields?

**Custom fields** allow you to add additional data to your WordPress pages beyond the standard title and content. With AI Section Builder:
- **Section data is stored** as custom fields automatically
- **No technical knowledge** required to manage content
- **Full WordPress compatibility** with themes and other plugins
- **Easy backup and migration** with standard WordPress tools

### How AI Section Builder Uses Custom Fields

**Automatic management**:
- Each section's content is saved as custom field data
- WordPress handles all the database storage and retrieval
- Your content integrates with WordPress backup systems
- Other plugins can access section data if needed

**Benefits for you**:
- **Reliable data storage** using WordPress standards
- **Easy content migration** between sites
- **Standard WordPress backup** includes all your sections
- **Developer-friendly** for custom integrations

## Content Management Through Custom Fields

### Page-Level Management

**Every page with AI Section Builder content has**:
- **Section configuration data** stored as custom fields
- **Global settings** that affect all sections
- **Page-specific overrides** when needed
- **Content history** through WordPress revisions

### User Role Integration

**Different user roles can**:
- **Editors**: Full access to edit section content
- **Authors**: Can edit sections on their own pages
- **Contributors**: Can draft section content for review
- **Custom roles**: Can be configured for specific section access

**Content workflow**:
- Draft sections for review before publishing
- Collaborate on content with team members
- Track changes through WordPress revision system
- Maintain content approval processes

## Advanced Custom Fields (ACF) Integration

### Compatible ACF Features

**If you use Advanced Custom Fields plugin**:
- AI Section Builder works alongside ACF without conflicts
- ACF fields can be added to the same pages as AI sections
- Both systems use WordPress custom fields appropriately
- Data can be exported/imported together

### Using ACF with Section Content

**Complementary approach**:
- **Use AI Section Builder** for main page content sections
- **Use ACF** for page-specific data (contact info, specifications, etc.)
- **Combine both** for comprehensive page management
- **Maintain separation** for clear content organization

**Example workflow**:
```
Page Header (ACF field) → Company name, tagline
Hero Section (AI Section Builder) → Main value proposition
Features Section (AI Section Builder) → Service highlights  
Contact Info (ACF fields) → Address, phone, hours
```

## Developer Integration

### Accessing Section Data Programmatically

**For developers who want to access section content**:
```php
// Get all section data for a page
$sections = get_post_meta($post_id, '_aisb_sections', true);

// Get global settings
$global_settings = get_option('aisb_global_settings');

// Check if page has AI sections
if (get_post_meta($post_id, '_aisb_has_sections', true)) {
    // Page uses AI Section Builder
}
```

### Custom Integration Examples

**Display section count**:
```php
function get_aisb_section_count($post_id) {
    $sections = get_post_meta($post_id, '_aisb_sections', true);
    return is_array($sections) ? count($sections) : 0;
}
```

**Check for specific section types**:
```php
function has_pricing_section($post_id) {
    $sections = get_post_meta($post_id, '_aisb_sections', true);
    if (is_array($sections)) {
        foreach ($sections as $section) {
            if ($section['type'] === 'pricing') {
                return true;
            }
        }
    }
    return false;
}
```

## Backup and Migration

### WordPress Standard Backups

**Your section content is included in**:
- **Standard WordPress exports** (Tools → Export)
- **Plugin backups** like UpdraftPlus, BackWPup
- **Database backups** through hosting providers
- **Site migration tools** like All-in-One WP Migration

### Manual Data Export

**For specific section data**:
1. **Go to** Tools → Export in WordPress admin
2. **Select** "Pages" and choose your pages with sections
3. **Download** the export file (includes all custom fields)
4. **Import** on new site using Tools → Import

### Migration Best Practices

**When moving sites**:
1. **Export content** with standard WordPress tools
2. **Note your global settings** from AI Section Builder → Settings
3. **Install AI Section Builder** on the new site first
4. **Import content** using WordPress importer
5. **Reconfigure global settings** to match your original site

## Database Structure

### How Section Data Is Stored

**Each page with sections has**:
- `_aisb_sections`: Array of all section data
- `_aisb_has_sections`: Boolean flag for quick checking
- `_aisb_last_modified`: Timestamp for change tracking
- `_aisb_version`: Plugin version for compatibility

**Global settings stored as**:
- `aisb_global_settings`: Colors, fonts, and global options
- `aisb_plugin_version`: For upgrade management
- `aisb_user_preferences`: User-specific settings

### Database Size Considerations

**Typical storage requirements**:
- **Simple page** (5 sections): ~5-10KB of custom field data
- **Complex page** (15 sections): ~25-50KB of custom field data
- **Global settings**: ~2-5KB total
- **Very efficient** compared to most page builders

## Performance and Optimization

### Custom Field Performance

**AI Section Builder optimizes performance by**:
- **Efficient data structure** minimizes database queries
- **Lazy loading** for section content when possible
- **Caching compatibility** with WordPress caching plugins
- **Minimal database footprint** compared to alternatives

### Caching Considerations

**Compatible with caching plugins**:
- **W3 Total Cache**: Automatically handles custom field caching
- **WP Rocket**: Includes custom field data in page caching
- **LiteSpeed Cache**: Optimizes custom field queries
- **Most caching plugins**: Work seamlessly with section data

## Troubleshooting Custom Fields

### Common Issues

**Sections not saving**:
- Check WordPress user permissions for editing custom fields
- Verify no conflicting plugins interfering with custom fields
- Ensure adequate server memory for large section configurations
- Check for JavaScript errors that might prevent saving

**Data missing after migration**:
- Verify custom fields were included in export/import
- Check that AI Section Builder is activated on new site
- Confirm global settings were migrated or reconfigured
- Test with a simple test page to isolate issues

**Performance issues**:
- Check for plugins that scan all custom fields excessively
- Monitor database queries if site is slow
- Consider caching plugins for better performance
- Review server resources if handling many pages with sections

### Diagnostic Tools

**Check section data**:
```php
// Add to functions.php temporarily for debugging
function debug_aisb_data($post_id) {
    $sections = get_post_meta($post_id, '_aisb_sections', true);
    echo '<pre>' . print_r($sections, true) . '</pre>';
}
```

**Verify plugin status**:
- Check WordPress admin → Plugins for AI Section Builder activation
- Review plugin version in WordPress admin
- Test with default theme to isolate theme conflicts
- Deactivate other plugins temporarily to test for conflicts

## Security Considerations

### Data Protection

**AI Section Builder automatically**:
- **Sanitizes all input** before saving to custom fields
- **Validates data types** to prevent malicious content
- **Uses WordPress standards** for data security
- **Follows WordPress nonces** for form security

### User Permissions

**Respects WordPress user capabilities**:
- Only users who can `edit_posts` can modify sections
- Custom capabilities can be added by developers
- Integrates with membership and role management plugins
- Follows WordPress security best practices

## Advanced Customization

### Custom Field Hooks

**For developers extending functionality**:
```php
// Filter section data before saving
add_filter('aisb_before_save_sections', 'custom_section_processing');

// Action after sections are saved
add_action('aisb_after_save_sections', 'custom_post_save_action');

// Modify section rendering data
add_filter('aisb_render_section_data', 'custom_render_modifications');
```

### Integration with Other Plugins

**Works well with**:
- **Yoast SEO**: Section content is included in SEO analysis
- **WPML**: Custom fields can be translated
- **Gravity Forms**: Can embed forms in sections
- **WooCommerce**: Sections work on product pages

## Best Practices

### Content Organization

**Recommended approach**:
- Use AI Section Builder for main page content
- Keep custom fields for page-specific metadata
- Maintain clear separation between different data types
- Document your content structure for team members

### Team Workflow

**For teams using section content**:
1. **Train team members** on section editing
2. **Establish content approval** processes if needed
3. **Use WordPress revisions** to track changes
4. **Back up content** regularly with standard tools

### Performance Optimization

**Best practices**:
- Avoid excessive numbers of sections per page (15+ may slow editing)
- Optimize images before adding to sections
- Use caching plugins for better performance
- Monitor site speed as you add content

## Next Steps

Now that you understand custom fields integration:

1. **Practice** editing section content and observe how it integrates with WordPress
2. **Learn** about [Database Integration](19-database-integration) for deeper technical understanding  
3. **Explore** [Performance Optimization](20-performance) for faster loading
4. **Review** your backup strategy to ensure section content is protected

## Need More Help?

- Review [Working with Sections](../editor-guide/working-with-sections) to practice content management
- Check [WordPress Integration Overview](17-working-with-themes) for broader integration topics
- Contact support for specific integration questions with other plugins
- Read [FAQ](../reference/faq) for common custom field questions

Remember: AI Section Builder leverages WordPress's robust custom field system to provide reliable, secure, and future-proof content management that integrates seamlessly with the WordPress ecosystem!