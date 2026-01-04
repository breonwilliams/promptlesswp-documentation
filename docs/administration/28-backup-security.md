# Backup & Data

How Promptless WP data is stored and backed up.

## What This Is

Information about data storage and backup compatibility.

## Data Storage

**Where data is stored**:
- Section content: `wp_postmeta` table
- Global settings: `wp_options` table
- Media files: WordPress uploads folder

**Backup compatibility**:
- Works with all WordPress backup plugins
- Included in standard database backups
- WordPress export/import includes sections

## Backup Process

**Standard WordPress backup**:
1. Use any WordPress backup plugin
2. Include database in backup
3. Sections automatically included

**No special requirements**:
- Sections stored as post meta
- Standard backup covers everything

## Data Management Settings

**Available in plugin**:
- Delete data on uninstall option
- Clear all data button (use carefully)

Settings at: Promptless WP → Data Management

## API Key Security

**Storage**:
- API key stored in WordPress options
- Not exposed in frontend
- Admin access only

## Need Help?

For backup questions: support@promptlesswp.com

