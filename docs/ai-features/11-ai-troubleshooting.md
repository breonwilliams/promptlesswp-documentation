# AI Troubleshooting

Having issues with the AI features? This guide covers common problems and their solutions, helping you get back to building amazing pages quickly.

## Common AI Issues

### AI Button Doesn't Appear

**Problem**: The "Generate with AI" button is missing from the toolbar.

**Possible Causes**:
- AI features not enabled in settings
- OpenAI API key not configured
- Plugin needs updating
- Browser cache issues

**Solutions**:
1. **Check AI Settings**:
   - Go to WordPress Admin → Promptless WP → AI Settings
   - Verify OpenAI API key is entered
   - Click "Test Connection" to verify key works

2. **Clear Browser Cache**:
   - Refresh page with Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
   - Clear browser cache completely
   - Try incognito/private browsing mode

3. **Check Plugin Version**:
   - Ensure you have latest plugin version
   - Update plugin if needed
   - Deactivate and reactivate plugin


### AI Modal Won't Open

**Problem**: Clicking "Generate with AI" does nothing or shows error.

**Possible Causes**:
- JavaScript errors on page
- Browser compatibility issues
- Plugin conflicts
- Insufficient permissions

**Solutions**:
1. **Check Browser Console**:
   - Press F12 to open developer tools
   - Look for red error messages in Console tab
   - Take screenshot of errors for support

2. **Try Different Browser**:
   - Test in Chrome, Firefox, Safari, or Edge
   - Disable browser extensions temporarily
   - Update browser to latest version

3. **Check User Permissions**:
   - Make sure you can edit the current page
   - Verify you have "edit_pages" capability
   - Try as administrator user

4. **Plugin Conflict Test**:
   - Temporarily deactivate other plugins
   - Test if AI modal opens
   - Reactivate plugins one by one to identify conflict

## Understanding AI Response Caching

### How AI Caching Works

Promptless WP caches AI responses for 24 hours to optimize performance and reduce API costs. This is generally beneficial but it's helpful to understand how it works.

**Key Points About Caching**:
- **Same content = same result**: Uploading identical documents returns the cached response
- **24-hour duration**: Responses are automatically refreshed after 24 hours
- **Cost savings**: Prevents duplicate API calls for the same content
- **Performance boost**: Instant results for previously processed documents

### When to Clear the AI Cache

**Recommended Situations**:

1. **After Plugin Updates**:
   - New versions may include AI improvements
   - Clear cache to benefit from updated AI instructions
   - Ensures you're using the latest content processing

2. **During Content Testing**:
   - When iterating on document formatting
   - To see immediate results of AI setting changes
   - For comparing different AI models or temperatures

3. **Troubleshooting**:
   - If sections aren't generating as expected
   - When testing different document structures
   - To rule out caching as a variable

### How to Clear the Cache

**Manual Cache Clear**:
- Go to WordPress Admin → Promptless WP → Cache
- Click "Clear AI Cache" button
- Your next upload will process fresh

**Alternative Method**:
- Make a small change to your document (add a period or space)
- This creates a different cache key
- Results in new AI processing


**Tip**: The cache system is designed to be transparent to users. In normal usage, you'll rarely need to think about it.

## Upload and Content Issues

### Document Upload Fails

**Problem**: Document won't upload or upload times out.

**Possible Causes**:
- File too large (over 5MB limit)
- Unsupported file format
- Internet connection issues
- Server upload limits

**Solutions**:
1. **Check File Requirements**:
   - Must be .docx format (not .doc)
   - File size under 5MB
   - Document not password protected
   - File not corrupted

2. **Reduce File Size**:
   - Remove large images from document
   - Compress images before inserting
   - Split large documents into smaller sections
   - Save as "Strict" docx format

3. **Alternative Upload Methods**:
   - Copy and paste text instead of uploading
   - Use Google Docs to convert and download as docx
   - Create new document with essential content only

4. **Server Issues**:
   - Wait 5 minutes and try again
   - Check with hosting provider about upload limits
   - Try uploading smaller test document


### Content Extraction Problems

**Problem**: Document uploads but content looks wrong or incomplete.

**Possible Causes**:
- Complex document formatting
- Content in headers/footers
- Text boxes or special layouts
- Non-standard fonts or characters

**Solutions**:
1. **Simplify Document Format**:
   - Use standard fonts (Arial, Times New Roman)
   - Remove complex tables and layouts
   - Convert text boxes to regular paragraphs
   - Use simple bullet points instead of custom formatting

2. **Move Content to Body**:
   - Copy header/footer content to main document
   - Remove text that's embedded in images
   - Ensure all important text is in main content area

3. **Alternative Approach**:
   - Copy all text from document
   - Paste into plain text editor (Notepad)
   - Copy from text editor and paste into AI modal
   - This removes all formatting but preserves content

### Paste Content Issues

**Problem**: Pasted text doesn't format correctly or looks wrong.

**Possible Causes**:
- Complex HTML formatting
- Special characters not supported
- Very long content that gets truncated
- Mixed formatting from multiple sources

**Solutions**:
1. **Clean Text Before Pasting**:
   - Paste into plain text editor first
   - Copy from text editor to remove formatting
   - Manually add headings and bullet points

2. **Format in Text Editor**:
   - Use # for main headings
   - Use ## for section headings
   - Use • or - for bullet points
   - Keep formatting simple and consistent

3. **Break Up Long Content**:
   - Split into smaller sections
   - Process one section at a time
   - Combine results manually afterward

## AI Generation Problems

### Generation Takes Too Long

**Problem**: AI processing never completes or takes over 5 minutes.

**Possible Causes**:
- Very large document (over 10,000 words)
- OpenAI API rate limits
- Network connectivity issues
- Server processing problems

**Solutions**:
1. **Reduce Content Size**:
   - Break document into smaller sections
   - Remove unnecessary content
   - Focus on most important information
   - Aim for 1,000-3,000 words maximum

2. **Check API Limits**:
   - Verify OpenAI account has sufficient credits
   - Check if API key has rate limiting
   - Wait 15 minutes and try again

3. **Network Troubleshooting**:
   - Check internet connection stability
   - Try from different network/location
   - Disable VPN if using one

4. **Alternative Processing**:
   - Close AI modal and try again
   - Restart browser and try again
   - Process content in smaller chunks


### Generation Fails with Error

**Problem**: AI generation stops with error message.

**Common Error Messages and Solutions**:

**"Invalid API Key"**:
- Verify API key is correct in settings
- Check for extra spaces or characters
- Generate new API key from OpenAI
- Test connection in AI Settings

**"Insufficient Credits"**:
- Add credits to OpenAI account
- Check billing information is current
- Verify account is in good standing

**"Content Too Long"**:
- Reduce document length
- Remove non-essential content
- Process in smaller sections

**"Rate Limit Exceeded"**:
- Wait 15-30 minutes before trying again
- Upgrade OpenAI plan if needed frequently
- Process content during off-peak hours

**"Server Error"**:
- Try again in a few minutes
- Check OpenAI status page for outages
- Contact support if persists

### Poor Quality Results

**Problem**: AI generates content but quality is low or irrelevant.

**Possible Causes**:
- Poorly structured input content
- Content not suited for web format
- Wrong content tone selected
- Input content too technical or specialized

**Solutions**:
1. **Improve Input Content**:
   - Use clear headings and structure
   - Include variety (text, lists, numbers, quotes)
   - Remove overly technical language
   - Add context and explanations

2. **Adjust AI Settings**:
   - Try different content tone
   - Use Advanced optimization level
   - Experiment with different design strategies

3. **Edit Input Before Processing**:
   - Rewrite confusing sections
   - Add missing context
   - Structure content more clearly
   - Include examples and specifics

4. **Iterative Improvement**:
   - Generate sections with better content
   - Use AI results as starting point only
   - Heavily edit generated content
   - Combine AI and manual building


## Content and Results Issues

### Missing Section Types

**Problem**: AI doesn't create expected section types (testimonials, stats, etc.).

**Why This Happens**:
- Content not formatted to be recognizable
- AI doesn't detect patterns it expects
- Content too subtle or unclear

**Solutions**:
1. **Format Testimonials Clearly**:
   ```
   Customer Testimonials:
   
   "Quote goes here with quotation marks"
   - Customer Name, Job Title, Company
   
   "Another quote with quotation marks"  
   - Another Customer, Their Role
   ```

2. **Make Numbers Prominent**:
   ```
   Our Impressive Results:
   • 500+ Happy Customers
   • 99% Success Rate  
   • 24/7 Support Available
   • Founded in 2018
   ```

3. **Structure Features as Lists**:
   ```
   Why Choose Us:
   • Fast Service - We deliver in 24 hours
   • Expert Team - 10+ years experience
   • Affordable - Starting at just $99
   ```

4. **Clear FAQ Format**:
   ```
   Frequently Asked Questions:
   
   Q: How long does delivery take?
   A: Most orders ship within 24 hours.
   
   Q: What's your return policy?
   A: 30-day money-back guarantee.
   ```

### Generic Content Generated

**Problem**: AI creates very generic, templated content.

**Causes**:
- Input content lacks specifics
- Business details are vague
- No unique value propositions included

**Solutions**:
1. **Add Specific Details**:
   - Include your actual services and prices
   - Add real customer names and quotes
   - Mention specific benefits and features
   - Include concrete numbers and results

2. **Provide Context**:
   - Explain what makes your business different
   - Include industry-specific terminology
   - Add background about your experience
   - Mention specific problems you solve

3. **Edit After Generation**:
   - Replace generic company names with yours
   - Update placeholder contact information
   - Personalize testimonials with real customers
   - Add specific calls-to-action

### Wrong Section Order

**Problem**: Generated sections are in wrong order or don't flow well.

**Causes**:
- Input content not in logical order
- AI misunderstanding content hierarchy
- Document structure unclear

**Solutions**:
1. **Reorder Manually**:
   - Drag and drop sections in editor
   - Move most important content to top
   - End with call-to-action sections

2. **Improve Input Structure**:
   - Organize document logically before upload
   - Put introduction content first
   - Group related information together
   - End with contact/next steps

3. **Standard Page Flow**:
   - Hero/Introduction first
   - Benefits/Features second  
   - Social proof (testimonials/stats) third
   - Process/How it works fourth
   - Pricing/Contact last

## Technical and Performance Issues

### AI Features Slow

**Problem**: AI features work but are very slow.

**Possible Causes**:
- Large documents taking longer to process
- High server load during peak times
- Network connectivity issues
- Browser performance problems

**Solutions**:
1. **Optimize Content Size**:
   - Keep documents under 5 pages
   - Remove unnecessary content
   - Process smaller sections at a time

2. **Timing Optimization**:
   - Try during off-peak hours (early morning, late evening)
   - Avoid busy times (typically 9-5 business hours)
   - Be patient during high-demand periods

3. **Browser Optimization**:
   - Close other browser tabs
   - Disable unnecessary browser extensions
   - Clear browser cache regularly
   - Use recommended browsers (Chrome, Firefox)

### Memory or Crash Issues

**Problem**: Browser becomes slow or crashes during AI generation.

**Causes**:
- Large documents using too much memory
- Browser running out of resources
- Multiple editor tabs open
- Other memory-intensive applications

**Solutions**:
1. **Resource Management**:
   - Close other browser tabs and applications
   - Work with smaller documents
   - Restart browser between large generations
   - Increase available system memory

2. **Browser Settings**:
   - Update browser to latest version
   - Disable memory-heavy extensions
   - Clear browser cache and data
   - Try incognito mode for testing

## Getting Additional Help

### Before Contacting Support

When experiencing persistent issues:

1. **Document the Problem**:
   - Note exact error messages
   - Screenshot any errors
   - Record steps to reproduce issue
   - Note browser and version used

2. **Test Basic Functionality**:
   - Try with small, simple document
   - Test in different browser
   - Try from different computer/network
   - Test with fresh API key

3. **Gather System Information**:
   - WordPress version
   - Plugin version
   - Browser and version
   - Operating system
   - Available internet speed

### When to Contact Support

Contact support if:
- Issues persist after trying troubleshooting steps
- Error messages are unclear or technical
- AI features stop working entirely
- You need help with API key setup

### Alternative Solutions

If AI features aren't working:
- **Build sections manually** using the editor
- **Use AI results as inspiration** rather than direct content
- **Focus on one section type** at a time manually
- **Combine manual building with AI enhancement**


## Prevention Tips

### Best Practices to Avoid Issues

1. **Quality Input**:
   - Use well-structured documents
   - Keep content length reasonable
   - Test with small documents first
   - Prepare content specifically for web use

2. **System Maintenance**:
   - Keep plugin updated
   - Maintain stable internet connection
   - Clear browser cache regularly
   - Monitor OpenAI account credits

3. **Workflow Optimization**:
   - Save work frequently
   - Process content in smaller chunks
   - Test AI settings with sample content
   - Have backup content ready

4. **Learning and Improvement**:
   - Study successful AI generations
   - Learn what content formats work best
   - Understand AI limitations and work with them
   - Develop hybrid AI/manual workflows

## Next Steps

If you're having ongoing AI issues:

1. **Master manual section building** as backup skill
2. **Learn about [Design System](../design-system/12-global-settings.md)** for customization
3. **Check [Administration](../administration/27-troubleshooting.md)** guides for system optimization
4. **Review [FAQ](../reference/30-faq.md)** for additional answers

## Need More Help?

- Check [Plugin Settings](../administration/25-plugin-settings.md) for configuration help
- Review [System Requirements](../reference/29-system-requirements.md)
- Read [FAQ](../reference/30-faq.md) for common questions

Remember: AI is a powerful tool when it works, but manual building is always available as a reliable alternative!