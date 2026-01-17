# Changelog

This changelog documents all notable changes to Promptless WP, including new features, improvements, bug fixes, and breaking changes. We follow [Semantic Versioning](https://semver.org/) for version numbering.

## Version 1.0.8 - 2025-01-15

### ✨ New Features

**Multi-Admin Lock System**
- Added concurrent editing protection to prevent multiple users from editing the same page simultaneously
- Lock status indicator in toolbar shows real-time lock health (green = active, yellow = connection issues, red = unable to verify)
- Warning banner appears when network connectivity issues are detected
- Session expired modal prompts re-login when WordPress session times out
- Lock lost modal notifies users when another admin takes over editing
- Automatic lock release when browser is closed via sendBeacon
- Background cron job cleans up orphaned locks twice daily

**Heading Highlight Feature**
- Wrap text in curly braces `{like this}` to highlight portions of your headings
- Highlighted text displays in your primary brand color
- Helper text added to all heading fields explaining how to use the feature

**Features Section: Showcase Layout Variant**
- New "Showcase" layout variant for Features sections
- Optimized for highlighting key features with enhanced visual presentation
- Links are now properly visible in the showcase layout

### 🎯 Improvements

**Color Palette Reorganization**
- Reorganized color presets into logical categories for easier selection
- Improved preset modal organization and navigation

**Preset Modal Active Indicator**
- Both color and font preset modals now display a checkmark on the currently applied preset
- Makes it easier to see which preset is currently in use when reopening modals

**FAQ Accordion Behavior**
- Accordions now open one at a time, automatically closing other open items
- Provides cleaner, more focused user experience when browsing FAQs

**Accessibility Enhancements**
- Backend editor accessibility fixes for improved screen reader support
- Font sizes converted from pixels to rem units for WCAG 2.1 Level AA compliance
- Removed drag and drop functionality for repeatable elements in favor of arrow buttons for better accessibility

### 🔧 Bug Fixes

**Features Hero Cards**
- Fixed hover animation issue on Features hero card variant

**Section Container Styling**
- Added box-sizing: border-box to all section containers for consistent layout behavior

---

## Version 1.0.7 - 2025-01-10

### ✨ New Features

**New Color Palettes**
- Added 30 new modern, visually appealing, and accessible color palettes
- Expanded selection for diverse brand requirements

**Button Repositioning**
- Added button positioning controls to Post Grid, Pricing, Team, Testimonial, Steps, Checklist, and Features sections
- Consistent button placement options across all section types

### 🔧 Bug Fixes

- Fixed video autoplay so videos are not muted by default
- Adjusted breakpoints for Checklist, FAQ, and Steps sections for consistency

---

## Version 1.0.6 - 2025-01-05

### ✨ New Features

**Video Poster Support**
- Added comprehensive video poster image support across all sections
- Better video thumbnail control and presentation

### 📚 Documentation

- Complete documentation overhaul for Docusaurus compatibility
- Comprehensive documentation cleanup and organization

### 🔧 Bug Fixes

- Fixed Convert tool issue where Features sections with inline variant weren't properly converting to other section types

---

## Version 1.0.5 - 2024-12-29

### 🔧 Bug Fixes

**AI Section Mapping**
- Fixed regression where bold headings in Word documents weren't creating feature cards
- Improved handling of concatenated text from Word document formatting
- Enhanced Word document text extraction to better identify section boundaries
- Relaxed H3-only constraint to allow bold headings with descriptions for card creation

**Display Improvements**
- Fixed pricing features field to display with proper line breaks using nl2br()
- Corrected line break handling in pricing tables for better readability

### 🎯 Improvements

**Content Processing**
- Added specific instructions for handling Word document formatting patterns
- Improved AI prompt accuracy for marketing and business documents
- Enhanced test coverage for Word document processing

## Version 1.0.4 - 2024-12-27

### ✨ New Features

**Dynamic Menu Shortcode**
- Added support for dynamic restaurant menus with live pricing
- Introduced [promptless_menu] shortcode for easy menu integration
- Automatic menu updates when content changes

### 🔧 Bug Fixes

**Section Display**
- Fixed Steps section supporting text display using correct content field
- Removed HTML bullet lists from pricing features for better center alignment
- Fixed Checklist and Steps grid layout inconsistencies

### 🎯 Improvements

**Smart Accessibility Colors**
- Enhanced color contrast calculations for better accessibility
- Improved automatic color adjustments for dark/light themes
- Better handling of custom background colors

**Compatibility**
- Fixed reusable elements in card content areas
- Enhanced CSS specificity for better theme compatibility

### 🔒 Security

**Update System**
- Migrated to Freemius SDK for secure updates
- Removed hardcoded GitHub tokens
- Improved license verification system

## Version 1.0.3 - 2024-12-23

### ✨ New Features

**Freemius Integration**
- Professional licensing system via Freemius SDK
- Free tier with 2-page limit
- Premium tier with unlimited pages
- Automatic updates through Freemius

### 🔧 Bug Fixes

**Layout Issues**
- Fixed grid layout inconsistencies in Checklist and Steps sections
- Corrected outro content positioning
- Improved button placement in grid layouts

### 🎯 Improvements

**Documentation**
- Added comprehensive section documentation
- Improved consistency across all section types
- Enhanced grid layout patterns

## Version 2.1.0 - 2024-01-20

### ✨ New Features

**Post Grid Sections**
- Added new Post Grid section type for displaying blog posts and articles
- Configurable grid layouts (2, 3, or 4 columns)
- Advanced filtering by category, tags, and date ranges
- Customizable post display options (excerpt length, meta information)
- Responsive design with mobile optimization

**Enhanced AI Features** 
- Improved document upload and analysis capabilities
- Support for additional file formats (DOCX, TXT, RTF)
- Better content extraction and analysis accuracy
- Enhanced AI prompt templates for different industries
- Improved error handling and user feedback

**Bulk Operations**
- Bulk image upload with automatic optimization
- Content find and replace across multiple sections
- Section duplication across multiple pages
- Global content updates and management tools
- Enhanced export/import functionality with selective options

### 🔧 Improvements

**Performance Optimizations**
- Reduced JavaScript bundle size by 25%
- Improved section rendering performance
- Enhanced database query optimization
- Better caching integration with popular caching plugins
- Optimized image loading and processing

**User Experience**
- Improved section editor interface with better visual feedback
- Enhanced drag-and-drop functionality for section reordering
- Better mobile editing experience
- Improved accessibility with ARIA labels and keyboard navigation
- Streamlined global settings interface

**Design System**
- Added new color schemes and presets
- Enhanced typography options with Google Fonts integration
- Improved Smart Accessibility Colors accuracy
- Better theme variant switching and preview
- Consistent spacing system across all sections

### 🐛 Bug Fixes

- Fixed issue with sections not saving in certain browser configurations
- Resolved conflict with specific caching plugins
- Fixed image upload issues on sites with custom upload directories
- Corrected responsive display issues on some mobile devices
- Fixed accessibility issues with form labels and navigation

### 📚 Documentation

- Complete user documentation with 31 comprehensive guides
- Added troubleshooting section with common solutions
- Enhanced developer documentation with hook examples
- New video tutorials for key features
- Improved inline help and tooltips throughout the interface

---

## Version 2.0.0 - 2023-12-15

### 🎉 Major Release

**Complete Plugin Rewrite**
- Modern React-based editor interface
- Improved performance and reliability
- Better WordPress integration and standards compliance
- Enhanced security with improved data validation

**New Section Types**
- Pricing sections with billing toggle functionality
- Team member sections with rich bio support
- Steps sections for process explanation
- Enhanced testimonials with star ratings
- Expanded FAQ sections with rich text answers

**AI Integration**
- OpenAI GPT-4o integration for content generation
- Document upload and analysis capabilities
- Industry-specific content templates
- Brand voice customization
- Intelligent content suggestions

### ⚠️ Breaking Changes

- **Minimum WordPress version** increased to 5.8
- **PHP 7.4** now required (previous minimum was 7.2)
- **Custom CSS** may need updates due to new class structure
- **Section data format** changed (automatic migration included)

### 📋 Migration Notes

- All existing sections automatically migrate to new format
- Global settings require reconfiguration after update
- Custom themes may need minor adjustments
- Backup recommended before upgrading from v1.x

---

## Version 1.5.2 - 2023-11-30

### 🐛 Bug Fixes

- Fixed compatibility issue with WordPress 6.4
- Resolved section display issues in some themes
- Fixed image optimization problems on specific hosting configurations
- Corrected responsive layout issues on tablet devices

### 🔧 Improvements

- Better error handling and user feedback
- Improved section loading performance
- Enhanced compatibility with popular SEO plugins
- Updated security measures and data validation

---

## Version 1.5.1 - 2023-11-15

### 🐛 Bug Fixes

- Fixed critical issue with section saving on multisite installations
- Resolved conflict with certain security plugins
- Fixed image upload issues when using CDN
- Corrected layout problems in specific theme configurations

### 🔧 Improvements

- Enhanced multisite support and compatibility
- Improved error logging and diagnostic information
- Better handling of large image files
- Optimized database queries for better performance

---

## Version 1.5.0 - 2023-11-01

### ✨ New Features

**Enhanced Statistics Sections**
- New animation options for number counting
- Improved visual design with better typography
- Enhanced responsive behavior
- Support for different number formats (percentages, currency)

**Improved Form Integration**
- Better Contact Form 7 integration
- Support for Gravity Forms
- Enhanced form styling options
- Improved form validation and error handling

**Advanced Customization**
- New CSS custom properties for easier theme integration
- Enhanced color picker with palette suggestions
- Improved typography controls with font preview
- Better spacing controls with visual feedback

### 🔧 Improvements

**Performance Enhancements**
- Reduced CSS file size by 30%
- Improved JavaScript loading strategy
- Better image optimization algorithms
- Enhanced caching compatibility

**User Experience**
- Improved section preview functionality
- Better visual feedback during saving
- Enhanced accessibility features
- Simplified onboarding process

### 🐛 Bug Fixes

- Fixed issue with sections not displaying in certain page builders
- Resolved image aspect ratio problems in specific configurations
- Fixed responsive layout issues on older mobile devices
- Corrected color inheritance problems in dark themes

---

## Version 1.4.3 - 2023-10-20

### 🐛 Bug Fixes

- Fixed compatibility with PHP 8.1
- Resolved section ordering issues in specific configurations
- Fixed image upload problems on sites with custom media handling
- Corrected CSS conflicts with certain themes

### 🔧 Improvements

- Enhanced error reporting and debugging information
- Better compatibility with popular caching plugins
- Improved section loading performance
- Enhanced security measures

---

## Version 1.4.2 - 2023-10-10

### 🐛 Bug Fixes

- Fixed critical security vulnerability in file upload handling
- Resolved compatibility issues with WordPress 6.3.2
- Fixed section display problems in specific theme configurations
- Corrected responsive layout issues on certain devices

### 🔒 Security

- Enhanced file upload validation and security
- Improved data sanitization throughout the plugin
- Better protection against XSS and SQL injection attacks
- Enhanced user capability checking

---

## Version 1.4.1 - 2023-09-25

### 🐛 Bug Fixes

- Fixed section content not saving in certain browser configurations
- Resolved image optimization issues on specific hosting providers
- Fixed responsive display problems on iOS devices
- Corrected color picker functionality in Safari

### 🔧 Improvements

- Better browser compatibility across different versions
- Improved error handling and user feedback
- Enhanced mobile editing experience
- Better integration with popular backup plugins

---

## Version 1.4.0 - 2023-09-15

### ✨ New Features

**Dark Mode Support**
- Global dark mode toggle for entire site
- Section-level dark theme options
- Automatic color adjustments for better contrast
- Enhanced accessibility in dark mode

**Enhanced Image Management**
- Bulk image upload functionality
- Automatic image optimization and compression
- Support for WebP format
- Enhanced image editing tools

**Improved Typography**
- Google Fonts integration with 800+ fonts
- Enhanced typography controls
- Better font loading performance
- Improved text readability options

### 🔧 Improvements

**Performance Optimizations**
- Reduced plugin file size by 40%
- Improved section loading speed
- Better caching integration
- Enhanced mobile performance

**User Interface**
- Redesigned settings interface
- Improved visual feedback throughout
- Better organization of options and controls
- Enhanced accessibility features

### 🐛 Bug Fixes

- Fixed issues with section ordering in certain configurations
- Resolved image display problems in specific themes
- Fixed responsive layout issues
- Corrected compatibility problems with certain plugins

---

## Version 1.3.0 - 2023-08-30

### ✨ New Features

**Template System**
- Save sections as reusable templates
- Template library with categorization
- Import/export template functionality
- Template sharing between sites

**Enhanced Responsive Design**
- Improved mobile editing interface
- Better tablet optimization
- Enhanced responsive preview options
- Mobile-first design approach

**Advanced Color Management**
- Color scheme presets
- Enhanced color picker with accessibility features
- Better color contrast checking
- Brand color management

### 🔧 Improvements

- Better WordPress 6.3 compatibility
- Enhanced plugin activation and deactivation procedures
- Improved backup and restore functionality
- Better integration with popular themes

### 🐛 Bug Fixes

- Fixed section duplication issues
- Resolved image upload problems in certain configurations
- Fixed responsive design issues on older devices
- Corrected compatibility problems with specific hosting providers

---

## Version 1.2.0 - 2023-08-15

### ✨ New Features

**FAQ Sections**
- Collapsible FAQ items
- Rich text support for answers
- Search functionality within FAQs
- Enhanced accessibility features

**Enhanced Team Sections**
- Social media integration
- Enhanced bio formatting
- Better image management
- Improved layout options

**Statistics Enhancement**
- Animated counters
- Multiple number formats
- Enhanced visual design
- Better mobile display

### 🔧 Improvements

- Better performance on large sites
- Enhanced security measures
- Improved user onboarding
- Better documentation and help system

### 🐛 Bug Fixes

- Fixed section content saving issues
- Resolved image aspect ratio problems
- Fixed responsive layout bugs
- Corrected CSS conflicts with certain themes

---

## Version 1.1.0 - 2023-08-01

### ✨ New Features

**Testimonials Section**
- Star rating display
- Customer photo support
- Multiple layout options
- Social proof enhancement

**Enhanced Features Section**
- Icon support for feature items
- Multiple column layouts
- Better visual hierarchy
- Improved mobile display

**Global Settings Panel**
- Centralized color management
- Typography controls
- Layout preferences
- Performance settings

### 🔧 Improvements

- Better theme compatibility
- Enhanced mobile experience
- Improved accessibility
- Performance optimizations

### 🐛 Bug Fixes

- Fixed section preview issues
- Resolved image upload problems
- Fixed responsive layout bugs
- Corrected saving issues in certain browsers

---

## Version 1.0.0 - 2023-07-15

### 🎉 Initial Release

**Core Features**
- Hero sections with customizable content
- Features sections with grid layouts
- Statistics display sections
- Responsive design system
- WordPress theme integration

**Design System**
- Global color management
- Typography controls
- Spacing system
- Theme variants (light/dark)

**User Interface**
- Intuitive section editor
- Drag-and-drop functionality
- Real-time preview
- Mobile-responsive interface

**WordPress Integration**
- Custom fields storage
- User role integration
- Theme compatibility
- SEO-friendly output

---

## Upgrade Notes

### From Version 1.x to 2.x

**Required Actions:**
1. **Backup your site** before upgrading
2. **Check PHP version** - Ensure PHP 7.4 or higher
3. **Update WordPress** to version 5.8 or higher
4. **Reconfigure global settings** after upgrade
5. **Test all sections** to ensure proper display

**What to Expect:**
- All section content automatically migrates
- Improved performance and new features
- Some visual adjustments may be needed
- Enhanced AI capabilities available

### General Upgrade Best Practices

1. **Always backup** before major updates
2. **Test on staging site** first when possible
3. **Check theme compatibility** after updates
4. **Clear caches** after upgrading
5. **Review new features** in documentation

## Support and Feedback

### Reporting Issues

If you encounter any bugs or issues:
1. **Check the FAQ** and troubleshooting guide first
2. **Search existing** support topics
3. **Provide detailed information** when reporting issues
4. **Include system information** (WordPress version, PHP version, etc.)

### Feature Requests

We welcome feature suggestions:
- **Submit via support** channels
- **Explain use case** and benefits
- **Check if similar** features already exist
- **Consider community** benefit

### Stay Updated

- **Follow release notes** for important changes
- **Subscribe to updates** for security patches
- **Join community** discussions for tips and tricks
- **Provide feedback** to help improve the plugin

---

*For more detailed information about any release, please refer to the specific version documentation or contact support.*