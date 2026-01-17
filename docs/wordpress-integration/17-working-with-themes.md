# Working with WordPress Themes

AI Section Builder is designed to work seamlessly with any WordPress theme while maintaining your site's design consistency. This guide explains how the plugin integrates with themes and what you need to know to get the best results with your specific theme.

## How Theme Integration Works

### Intelligent Theme Compatibility

AI Section Builder automatically:
- **Detects your theme's styles** and adapts accordingly
- **Inherits your theme's fonts** unless you customize them
- **Respects your theme's colors** while allowing customization
- **Maintains your theme's overall design language**
- **Preserves your theme's mobile responsiveness**

### What Stays Consistent

**Your theme controls**:
- Navigation menus and header design
- Footer design and content
- Sidebar layouts (if your theme uses them)
- Overall site structure and container widths
- Theme-specific features and customizations

**AI Section Builder manages**:
- Content section design within your pages
- Typography for section content (if customized)
- Colors for section content (if customized)
- Section spacing and layout
- Section-specific functionality

## Popular Theme Compatibility

### Astra Theme

**What works great**:
- Automatic color inheritance from Astra's customizer
- Seamless integration with Astra's typography settings
- Full compatibility with Astra's page layouts
- Works with Astra Pro features and modules

**Special features**:
- Respects Astra's container widths
- Inherits Astra's button styles
- Maintains Astra's responsive breakpoints
- Compatible with Astra's header/footer builder

### Divi Theme

**What works great**:
- Clean integration without conflicting with Divi builder
- Respects Divi's custom fonts and colors
- Works alongside existing Divi content
- Maintains Divi's visual design language

**Best practices with Divi**:
- Use AI Section Builder on fresh pages for best results
- Avoid mixing with Divi builder on the same page sections
- Let AI Section Builder handle section design completely
- Use Divi's theme customizer for site-wide settings

### Elementor Hello Theme

**What works great**:
- Perfect minimal base for AI Section Builder content
- No conflicting styles or design elements
- Fast loading and clean integration
- Designed specifically for page builder content

**Advantages**:
- Maximum design freedom for your sections
- No theme-specific styles to work around
- Optimal performance with section content
- Clean, semantic HTML structure

### GeneratePress

**What works great**:
- Lightweight, clean integration
- Excellent customizer integration
- Fast loading with section content
- Professional appearance out of the box

**Special features**:
- Inherits GeneratePress color schemes
- Respects GeneratePress typography choices
- Compatible with GeneratePress Premium modules
- Maintains GeneratePress performance standards

### OceanWP

**What works great**:
- Rich customization options work well with sections
- Multiple layout options for different page types
- Good performance with section content
- Professional design base for business content

**Integration benefits**:
- Inherits OceanWP's extensive color options
- Works with OceanWP's typography controls
- Compatible with OceanWP's layout settings
- Maintains OceanWP's mobile responsiveness

## Page Layout Integration

### Display Mode Options

AI Section Builder offers three professional display modes for maximum flexibility:

**Canvas Mode** (Landing Pages):
- Removes theme header and footer completely
- Full control over entire page design
- Perfect for sales pages, landing pages, coming soon pages
- No theme styling interference

**Full Width Mode** (Standard Pages):
- Preserves theme header and footer
- Content spans full browser width
- Maintains site navigation and branding
- Best for regular content pages

**Shortcode Mode** (Page Builder Integration):
- Use `[promptless_wp]` shortcode anywhere
- Works inside any page builder
- Mix AI sections with other content
- Most flexible integration method

### How Page Layouts Work

**Full-width pages** (Recommended for Canvas/Full Width modes):
- AI Section Builder content spans the full browser width
- Creates modern, professional appearance
- Works best with section-based content
- Provides maximum visual impact

**Contained pages** (Works with Shortcode mode):
- Section content respects your theme's content width
- Good for sites mixing traditional content with sections
- Maintains consistency with existing page layouts
- May limit visual impact of some section types

### Setting Up Page Layouts

**In your WordPress page editor**:
1. **Create or edit** a page where you want to add sections
2. **Find the "Promptless WP" meta box** below the editor
3. **Choose your display mode**:
   - Canvas: For landing pages without theme elements
   - Full Width: For pages with theme header/footer
   - Shortcode: For page builder integration
4. **If using shortcode mode**, copy `[promptless_wp]` and paste where needed
5. **Save your page** to apply changes

**Common theme layout options** (for Full Width mode):
- Full Width / No Sidebar
- Page Builder Template
- Blank Page Template
- Canvas Template
- Landing Page Template

### Theme-Specific Setup

**Astra**:
- Page Settings → Sidebar → No Sidebar
- Page Settings → Content Layout → Full Width / Stretched

**Divi**:
- Use "Blank Page" template
- Page Settings → Layout Settings → Full Width

**GeneratePress**:
- Sidebar → No Sidebars
- Container → Full Width

**OceanWP**:
- Page Settings → Layout → Full Width
- Sidebar → No Sidebar

## Color and Typography Integration

### Automatic Color Inheritance

**How it works**:
- AI Section Builder automatically detects your theme's color settings
- Your sections inherit appropriate colors from your theme
- You can override theme colors with custom settings
- Color changes in your theme automatically update sections

**What gets inherited**:
- Primary theme colors
- Text colors and background colors
- Button colors and link colors
- Border and accent colors

### Typography Integration

**Font inheritance**:
- Sections automatically use your theme's fonts
- Heading fonts inherit from theme heading settings
- Body fonts inherit from theme body text settings
- You can customize fonts specifically for sections

**When to customize fonts**:
- Your theme's fonts don't match your brand
- You want sections to have distinctive typography
- You need better readability for section content
- You want to create visual hierarchy

## Responsive Design Integration

### Mobile Compatibility

**AI Section Builder automatically**:
- Adapts to your theme's mobile breakpoints
- Maintains touch-friendly navigation and buttons
- Ensures readable text sizes on mobile devices
- Optimizes spacing for mobile viewing

**Your theme provides**:
- Mobile navigation and header behavior
- Overall mobile layout structure
- Device-specific optimizations
- Theme-specific mobile features

### Testing Responsive Design

**Check these elements**:
- Section content readability on mobile
- Button and link functionality on touch devices
- Image sizing and loading on mobile
- Overall page performance on mobile devices

**Use these tools**:
- Browser developer tools for mobile simulation
- Actual mobile devices for real-world testing
- Google's Mobile-Friendly Test tool
- PageSpeed Insights for mobile performance

## Common Theme Challenges

### Conflicting Styles

**If your sections don't look right**:
1. **Check your theme's customizer** for conflicting settings
2. **Try disabling theme-specific features** that might interfere
3. **Use a simpler page template** if available
4. **Contact support** with your specific theme name

**Common solutions**:
- Switch to a full-width page template
- Disable theme-specific styling for the page
- Clear any caching plugins after making changes
- Update both your theme and AI Section Builder

### Performance Issues

**If pages load slowly**:
1. **Check for plugin conflicts** with other installed plugins
2. **Optimize images** used in your sections
3. **Use caching plugins** like W3 Total Cache or WP Rocket
4. **Consider theme performance** - some themes are heavier than others

**Optimization tips**:
- Use modern image formats (WebP when possible)
- Optimize section images before uploading
- Limit the number of sections per page
- Use fast, lightweight themes when possible

### Layout Problems

**If content doesn't display properly**:
1. **Verify page template** is set to full-width
2. **Check theme customizer** for layout settings
3. **Clear any caching** after making changes
4. **Test with a default theme** to isolate the issue

## Theme-Specific Best Practices

### For Business/Professional Themes

**Recommended approach**:
- Use conservative color schemes that match your theme
- Maintain professional typography choices
- Focus on readability and trust-building
- Keep section designs clean and organized

### For Creative/Portfolio Themes

**Recommended approach**:
- Take advantage of full-width capabilities
- Use bold colors and creative layouts
- Showcase visual content prominently
- Create striking visual impact with sections

### For E-commerce Themes

**Recommended approach**:
- Focus on conversion-optimized layouts
- Use sections to highlight product benefits
- Create clear calls-to-action throughout
- Maintain consistency with your store design

## Getting the Best Results

### Planning Your Integration

**Before you start**:
1. **Review your theme's documentation** for page layout options
2. **Check your theme's customizer** for relevant settings
3. **Plan your color scheme** to complement your theme
4. **Consider your existing content** and how sections will fit

### Optimization Strategy

**For best performance**:
- Use a fast, well-coded theme as your foundation
- Optimize all images before adding to sections
- Test page loading speed regularly
- Keep your theme and plugins updated

### Visual Consistency

**Maintain site-wide consistency**:
- Use colors that work with your theme
- Choose fonts that complement your theme's typography
- Keep section styles professional and polished
- Test how sections look with your theme's other content

## Troubleshooting Common Issues

### Sections Don't Appear

**Possible causes and solutions**:
- **Display mode issue**: Check that correct display mode is selected
- **Shortcode placement**: If using shortcode mode, ensure `[promptless_wp]` is added to page
- **Page template issue**: For Full Width mode, use full-width template
- **Plugin conflict**: Deactivate other plugins temporarily to test
- **Caching issue**: Clear all caches and test again
- **Theme compatibility**: Try shortcode mode for maximum compatibility

### Styling Looks Wrong

**Check these items**:
- Theme customizer settings that might override section styles
- Page template selected for the page
- Custom CSS in your theme that might conflict
- Plugin conflicts with styling

### Mobile Display Issues

**Common solutions**:
- Verify your theme is mobile-responsive
- Check section content on actual mobile devices
- Optimize images for mobile viewing
- Test page loading speed on mobile connections

## Next Steps

Now that you understand theme integration:

1. **Configure** your page layouts for optimal section display
2. **Learn** about [Custom Fields Integration](18-custom-fields.md) for advanced functionality
3. **Explore** [Database Integration](19-database-integration.md) to understand data storage
4. **Review** [Performance Optimization](20-performance.md) for faster loading

## Need More Help?

- Review [Working with Sections](../editor-guide/05-working-with-sections.md) for hands-on practice
- Check [Global Settings](../design-system/12-global-settings.md) for theme-related customizations
- Contact support with your specific theme name for personalized help
- Read [FAQ](../reference/30-faq.md) for common theme-related questions

Remember: AI Section Builder is designed to enhance your theme, not replace it. The best results come from working with your theme's strengths while using sections to create compelling, conversion-focused content!