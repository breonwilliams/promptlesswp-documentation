# Troubleshooting

Common issues and fixes for Promptless WP.

## Quick Checks

- Plugin activated
- WordPress 6.0+
- PHP 7.4+
- Browser cache cleared
- JavaScript enabled
- Admin permissions

## Sections Not Displaying

**Cause**: Theme compatibility or display mode issue

**Fix**:
1. Check display mode in page meta box
2. Try "Canvas" mode for full control
3. Clear cache plugins
4. Test with default WordPress theme

If issue persists: contact@promptlesswp.com

## Editor Not Loading

**Cause**: Browser issue or plugin conflict

**Fix**:
1. Clear browser cache
2. Check browser console (F12) for errors
3. Deactivate other plugins temporarily
4. Increase PHP memory to 256MB

If JavaScript errors appear: contact@promptlesswp.com

## AI Not Working

**Invalid API Key**:
- Check key in Promptless WP → AI Settings
- Remove extra spaces
- Get new key from openai.com

**Rate/Quota Limits**:
- Check OpenAI usage dashboard
- Wait for limit reset
- Add payment method at OpenAI

For other AI errors: contact@promptlesswp.com

## Performance Issues

**Slow Loading**:
- Compress images before upload
- Limit to 10-15 sections per page
- Enable caching plugin
- Upgrade hosting if needed

**Cache Issues**:
- Go to Promptless WP → Cache Management
- Click "Clear All Caches"
- Clear browser cache too

## Content Not Saving

**Permission Issue**:
- Verify you can edit the page
- Try with admin account

**Server Timeout**:
- Save smaller changes
- Increase PHP timeout to 60s

**Browser Issue**:
- Clear cache and cookies
- Try incognito mode
- Test different browser

## Image Upload Issues

**File Too Large**:
- Compress images first
- Check PHP upload_max_filesize
- Standard limit: 8-32MB

**Wrong Format**:
- Use JPG, PNG, or WebP
- Convert other formats first

For server config issues: contact@promptlesswp.com

## Plugin Conflicts

**Test for Conflicts**:
1. Deactivate all plugins except Promptless WP
2. Test if issue resolves
3. Reactivate plugins one by one
4. Identify conflicting plugin

**Known Conflicts**:
- Other page builders (Elementor, Divi)
- Aggressive caching plugins
- Some security plugins


## Theme Compatibility

**Test Compatibility**:
1. Switch to Twenty Twenty-Four theme
2. Test if issue resolves
3. If yes, theme conflict confirmed

**Fix**:
- Use Canvas display mode
- Try Full Width template
- Contact theme developer

## Server Requirements

**Minimum Requirements**:
- PHP 7.4+
- WordPress 6.0+
- 128MB memory
- Standard PHP extensions

**Check with Host**:
- PHP version upgrade
- Memory limit increase
- Execution time settings

## Error Messages

**"Sections failed to load"**
- Clear browser cache
- Check for plugin conflicts

**"Unable to connect to AI"**
- Check API key
- Verify OpenAI account status

**"Permission denied"**
- Need admin or editor role
- Check page edit permissions

**PHP Memory Error**
- Increase to 256MB
- Contact hosting provider


## Getting Help

**Before Contacting Support**:
1. Try solutions above
2. Test with default theme
3. Check for plugin conflicts
4. Clear all caches

**Contact Support**:
contact@promptlesswp.com

**Include**:
- Error description
- WordPress version
- PHP version
- Active theme
- Error messages


