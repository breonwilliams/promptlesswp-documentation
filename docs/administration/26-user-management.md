# User Management

Promptless WP user access and permissions.

## What This Is

Basic WordPress role-based access control.

## How It Works

**Access Requirements**:
- Admin menu pages: Administrator role (manage_options)
- Editor access: Can edit pages (edit_pages)
- Page-specific: Can edit that specific page

**No Custom Roles**:
Plugin uses standard WordPress capabilities only.


## Common Issues

**Can't access editor**:
- Need edit_pages capability
- Must be able to edit specific page
- Check WordPress user role

**Can't see admin menu**:
- Need administrator role
- manage_options capability required


## Need Help?

For permission issues: contact@promptlesswp.com