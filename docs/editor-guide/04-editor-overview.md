# Editor Overview

The Promptless WP editor is where all the magic happens. This comprehensive guide will help you understand every feature and become an expert at building beautiful pages.

## Getting to the Editor

There are several ways to access the Promptless WP editor:

### From WordPress Pages
1. **Go to Pages** in your WordPress admin
2. **Edit any page** or create a new one  
3. **Find the "Promptless WP" meta box** (usually below the content area)
4. **Click "Activate Promptless WP"** (if not already active)
5. **Click "Edit with Promptless WP"**

### From the Admin Bar
1. **Visit any page** on your website (frontend)
2. **Look for "Edit with Promptless WP"** in the admin bar at the top
3. **Click it** to jump straight into editing mode

### Quick Access
- **Bookmark** the editor URL for pages you edit frequently
- **Use browser back button** to return from preview mode

[Screenshot: Different ways to access the editor]

## Editor Layout Deep Dive

The editor uses a three-panel layout designed for efficiency:

### Left Sidebar (Content Panel)
**Purpose**: Add and edit content
**Width**: Adjustable, can be collapsed
**Contains**:
- Section management tools
- Content editing forms
- Global settings (when active)

### Center Area (Preview Panel)  
**Purpose**: Visual preview of your page
**Width**: Responsive, adapts to content
**Contains**:
- Live preview of all sections
- Section interaction tools
- Visual feedback indicators

### Right Sidebar (Design Panel)
**Purpose**: Design and layout controls  
**Width**: Appears when needed
**Contains**:
- Theme and layout options
- Advanced styling controls
- Section-specific settings

[Screenshot: Three-panel layout with detailed callouts]

## Toolbar Functions

### Navigation Tools
- **Back Arrow (🠐)**: Return to WordPress page editor
- **Page Title**: Shows "Editing: [Page Name]" for confirmation
- **Home Icon**: Quick link to WordPress dashboard

### Section Tools
- **Plus Button (+)**: Add new sections quickly
- **Settings Gear (⚙️)**: Open global design settings
- **Layout Controls**: Show/hide sidebars

### Content Tools  
- **Preview Eye (👁️)**: Open page preview in new tab
- **AI Button (✨)**: Generate content with AI
- **Undo/Redo**: Reverse recent changes

### Save Controls
- **Save Settings**: Save global design preferences
- **Save Changes**: Save page content and structure

[Screenshot: Toolbar with each button labeled and explained]

## Section Management System

### Adding Sections
The editor provides multiple ways to add sections:

1. **From the Add Button**:
   - Click "+" in toolbar or sidebar
   - Browse section types visually
   - Preview section styles before adding

2. **From Section List**:
   - Click "Add Section" in left sidebar
   - See all available section types
   - Access recently used sections quickly

3. **Between Existing Sections**:
   - Hover between sections in preview
   - Click the "+" that appears
   - Insert sections exactly where you want them

### Section Organization
**Visual Section List**: The left sidebar shows all sections in order:
- **Drag and drop** to reorder
- **Click section names** to jump to editing
- **See section status** (complete, needs content, errors)
- **Quick actions** (duplicate, delete) for each section

### Section States
Sections have different visual states:
- **Normal**: Section is complete and displays properly
- **Selected**: Blue outline, currently being edited  
- **Warning**: Orange indicator, missing required content
- **Error**: Red indicator, content needs fixing

[Screenshot: Section list showing different states and drag handles]

## Content Editing Workflow

### The Standard Editing Process
1. **Select a section** (click in preview or section list)
2. **Left sidebar switches** to content editing mode
3. **Edit content** in organized tabs
4. **See changes instantly** in the live preview
5. **Save when ready** or continue to next section

### Content Tab Structure
Every section follows a consistent structure:

#### Content Tab
- **Header Block**: Eyebrow, heading, main content
- **Items Block**: Section-specific content (cards, testimonials, etc.)
- **Footer Block**: Outro content and buttons

#### Media Tab  
- **Featured Media**: Images or videos for the section
- **Media Settings**: Positioning, aspect ratios, styling options
- **Shortcode Content**: Custom embed codes if needed

#### Layout Tab
- **Theme Variant**: Light or dark styling
- **Layout Variant**: Content positioning (left, right, center)
- **Custom Background**: Override section background color

#### Advanced Tab
- **Custom ID**: For developers and custom styling
- **Custom Classes**: Additional CSS classes
- **Display Settings**: Advanced visibility controls

[Screenshot: Tab structure showing consistent organization]

## Live Preview System

### Real-Time Updates
The preview shows changes instantly as you type:
- **Text changes** appear character by character
- **Color changes** apply immediately  
- **Layout changes** show instant results
- **Media uploads** display as soon as uploaded

### Preview Modes
The preview automatically adapts to show:
- **Desktop view** (default, full width)
- **Tablet view** (when window is medium width)
- **Mobile view** (when window is narrow)

### Interactive Elements
In the preview, you can:
- **Click and drag** to reorder sections
- **Hover for quick actions** (edit, delete, duplicate)
- **Click elements** to jump to editing
- **Test buttons and links** (they work in preview)

### Preview Tools
- **Zoom controls**: Get closer look at details
- **Responsive toggles**: Force different screen sizes  
- **Ruler guides**: Align elements precisely
- **Focus modes**: Hide distractions while editing

[Screenshot: Preview modes and tools in action]

## Global Settings Integration

### Accessing Global Settings
Click the settings gear (⚙️) to open global design controls:
- **Right sidebar appears** with design options
- **Left sidebar switches** to global settings mode
- **All settings apply** across entire website

### Settings Categories
**Colors & Branding**:
- Primary and secondary brand colors
- Light and dark mode color schemes  
- Smart accessibility color adjustments

**Typography**:
- Font selections for headings, body, buttons
- Font weights and styling options
- Custom font uploads

**Styling Options**:
- Border radius (sharp to fully rounded)
- Neo-brutalist mode (bold, high-contrast styling)
- Text color overrides for buttons

### Live Preview of Changes
Global settings show immediate effects:
- **Color changes** update all sections instantly
- **Font changes** apply across all text
- **Style changes** affect all relevant elements

[Screenshot: Global settings panel with live preview updates]

## State Management

### Auto-Save Behavior
The editor intelligently manages your work:
- **Content auto-saves** as you type (with debouncing)
- **Global settings** require manual save
- **Draft protection** prevents loss on browser close
- **Change indicators** show what needs saving

### Unsaved Changes Warning
The editor protects your work:
- **Orange indicators** show unsaved changes
- **Browser warnings** prevent accidental loss
- **Auto-recovery** on editor reload
- **Manual save controls** for important checkpoints

### Version History
Although not visible to users, the editor maintains:
- **Change tracking** for undo/redo functionality
- **Session persistence** across browser refreshes
- **Error recovery** if something goes wrong

## Performance Optimization

### Efficient Rendering
The editor is optimized for speed:
- **Component lazy loading** reduces initial load time
- **Image optimization** for faster preview updates
- **Debounced saving** prevents excessive server requests
- **Smart re-rendering** only updates changed elements

### Memory Management
For large pages with many sections:
- **Virtual scrolling** for section lists
- **Image lazy loading** in preview
- **Cleanup routines** prevent memory leaks
- **Efficient state updates** maintain responsiveness

[Screenshot: Performance indicators and loading states]

## Accessibility Features

### Keyboard Navigation
The editor works fully with keyboard:
- **Tab navigation** through all controls
- **Enter/Space** to activate buttons
- **Arrow keys** to move between form fields
- **Escape** to cancel actions or deselect

### Screen Reader Support
- **Proper ARIA labels** on all interactive elements
- **Status announcements** for state changes
- **Logical tab order** through interface
- **Descriptive button text** for context

### Visual Accessibility
- **High contrast mode** support
- **Scalable interface** respects browser zoom
- **Clear focus indicators** show current position
- **Color-blind friendly** status indicators

## Troubleshooting Common Issues

### Editor Won't Load
- **Check browser compatibility** (Chrome, Firefox, Safari, Edge)
- **Disable browser extensions** temporarily
- **Clear browser cache** and try again
- **Check console for errors** (F12 developer tools)

### Changes Not Saving
- **Check internet connection** 
- **Look for error messages** in toolbar
- **Try manual save** with "Save Changes" button
- **Refresh page** and try again

### Preview Looks Different
- **Check display mode** (Canvas vs Fullwidth)
- **Clear cache** on live website
- **Check theme compatibility** settings
- **Verify all changes were saved**

### Performance Issues
- **Reduce number of sections** on very long pages
- **Optimize images** before uploading
- **Close other browser tabs** to free memory
- **Check internet speed** for slow uploads

## Editor Customization

### Workspace Preferences
You can customize the editor workspace:
- **Sidebar widths** can be dragged to resize
- **Panel visibility** can be toggled on/off
- **Zoom levels** can be adjusted
- **Color scheme** follows system preferences

### Keyboard Shortcuts
Power users can work faster with shortcuts:
- **Ctrl/Cmd + S** - Save changes
- **Ctrl/Cmd + Z** - Undo
- **Ctrl/Cmd + Y** - Redo  
- **Escape** - Deselect current section
- **Delete** - Remove selected section
- **Tab** - Navigate between form fields

## Next Steps

Now that you understand the editor:

1. **Practice** with the [Working with Sections](05-working-with-sections) guide
2. **Learn** about [Preview & Publishing](06-preview-publishing)
3. **Explore** different [Section Types](../section-types/)
4. **Try** the [AI Features](../ai-features/) for faster content creation

## Need More Help?

- Check [Troubleshooting Guide](../administration/troubleshooting) for technical issues
- Review [Keyboard Shortcuts](../reference/keyboard-shortcuts) for efficiency tips
- Read [FAQ](../reference/faq) for common questions

The editor is designed to be intuitive, but don't hesitate to experiment - you can always undo changes or preview before publishing!