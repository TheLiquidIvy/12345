# Content Management System (CMS) Guide

## Overview
The PixelPlaque CMS is a comprehensive WYSIWYG content management system for managing blog posts and portfolio items. It provides a Microsoft Word-like editing experience with powerful features for content creation and management.

## Features

### ✨ Core Features
- **WYSIWYG Editor**: Rich text editor with Word-like formatting capabilities
- **Dual Content Management**: Manage both blog posts and portfolio items in one interface
- **Image Upload & Cropping**: Drag-and-drop image uploads with built-in cropping tool
- **Auto-Save**: Automatic draft saving every 3 seconds (for existing items)
- **Live Preview**: Preview how your content will look before publishing
- **Tag Management**: Click to add/remove tags for better content organization
- **SEO Optimization**: Built-in SEO fields for better search engine visibility
- **Draft/Published Status**: Control content visibility with status management
- **Search & Filter**: Quickly find content with built-in search

## Accessing the CMS

1. **Login**: Navigate to `/login` and sign in with your authorized account
2. **Dashboard**: After login, you'll be redirected to `/admin/dashboard`
3. **Open CMS**: Click "Open CMS" button to access the content management interface at `/admin/cms`

## Using the Editor

### Text Formatting
The toolbar provides Word-like formatting options:
- **Bold, Italic, Underline, Strikethrough**: Basic text styling
- **Headings**: H1, H2, H3 for document structure
- **Lists**: Bullet lists and numbered lists
- **Alignment**: Left, center, right, and justify
- **Quotes**: Blockquotes for emphasized text
- **Links**: Add hyperlinks to text
- **Code**: Inline code formatting
- **Undo/Redo**: Revert or reapply changes

### Adding Images
1. Click the **Image** button in the toolbar
2. **Drag & drop** your image or **click to browse**
3. **Crop** the image to desired dimensions (16:9 aspect ratio)
4. Adjust **zoom** level for perfect framing
5. Click **Upload** to add to your content

Images are automatically uploaded to Firebase Storage and embedded in your content.

## Managing Blog Posts

### Creating a New Blog Post
1. Switch to the **Blog Posts** tab
2. Click **Create New**
3. Fill in the required fields:
   - **Title**: Post title (auto-generates slug)
   - **Category**: Design, Development, SEO, or Content
   - **Read Time**: Estimated reading time (e.g., "5 min read")
   - **Excerpt**: Brief summary for listings
   - **Content**: Full article using the WYSIWYG editor
   - **Featured Image**: Main image URL or upload
   - **Tags**: Click to add/remove tags

### SEO Settings (Expandable Section)
- **SEO Title**: Optimized title for search engines
- **Meta Description**: Brief description for search results
- **Slug**: URL-friendly identifier (auto-generated from title)
- **OG Image**: Social media sharing image

### Publishing
- **Save Draft**: Keep changes private
- **Publish**: Make post live to visitors
- **Preview**: See how it looks before publishing
- **Auto-Save**: Drafts save automatically every 3 seconds

## Managing Portfolio Items

### Creating a New Portfolio Item
1. Switch to the **Portfolio Items** tab
2. Click **Create New**
3. Fill in the required fields:
   - **Title**: Project name (auto-generates slug)
   - **Category**: Web Development, Web Design, Graphic Design, Content Creation, or SEO Marketing
   - **Description**: Brief project summary
   - **Content**: Detailed project information using WYSIWYG editor
   - **Featured Image**: Main project image
   - **Tags**: Click to add/remove technology/skill tags

Portfolio items have the same SEO settings and publishing options as blog posts.

## Auto-Save Functionality

The CMS automatically saves your work:
- **Frequency**: Every 3 seconds while editing
- **Condition**: Only saves existing items (items with an ID)
- **Indicator**: "Last saved X seconds ago" appears at the bottom of the editor
- **Note**: New items must be saved manually first before auto-save activates

## Search & Filter

Use the search bar to find content by:
- Title
- Excerpt/Description
- Content text

Results filter in real-time as you type.

## Content Organization

### Tags
- Click tags to toggle them on/off
- Available tags: Design, Development, SEO, Content, React, TypeScript, UI/UX
- Tags help with filtering and content discovery
- Tags appear as badges on content cards

### Categories
Each content type has predefined categories:
- **Blog**: Design, Development, SEO, Content
- **Portfolio**: Web Development, Web Design, Graphic Design, Content Creation, SEO Marketing

### Status
- **Draft**: Content is saved but not visible to public
- **Published**: Content is live and visible to visitors

## Firebase Configuration

### Required Setup
Before image uploads work, you need to configure Firebase:

1. **Update Firebase Credentials** in `src/lib/firebase.ts`:
   ```javascript
   const firebaseConfig = {
     apiKey: 'YOUR_API_KEY',
     authDomain: 'YOUR_AUTH_DOMAIN',
     projectId: 'YOUR_PROJECT_ID',
     storageBucket: 'YOUR_STORAGE_BUCKET',
     messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
     appId: 'YOUR_APP_ID',
   };
   ```

2. **Enable Firebase Storage**:
   - Go to Firebase Console → Storage
   - Click "Get Started"
   - Set security rules to allow authenticated users to upload

3. **Security Rules** (recommended):
   ```
   rules_version = '2';
   service firebase.storage {
     match /b/{bucket}/o {
       match /{allPaths=**} {
         allow read;
         allow write: if request.auth != null;
       }
     }
   }
   ```

### Authorization
Update the authorized admin email in `src/store/auth-store.ts`:
```javascript
if (user && user.email === 'YOUR_ADMIN_EMAIL@example.com') {
```

## Current Limitations

### In-Memory Storage
Currently, the CMS uses **in-memory storage** (React state), which means:
- ✅ Full editing functionality works
- ✅ Auto-save works within a session
- ⚠️ Data is lost on page refresh
- ⚠️ No persistence between sessions

### Future Enhancements
To add persistence:
1. Connect to the Drizzle ORM database (schema already created in `src/data/schema.ts`)
2. Implement API endpoints for CRUD operations
3. Replace local state with database queries

The database schema is already prepared with all necessary fields:
- Tags table with many-to-many relationships
- SEO fields (title, description, slug, OG image)
- Draft/published status
- Timestamps (created, updated, published)

## Tips & Best Practices

### Writing Great Content
1. **Use headings** to structure your content (H1 for title, H2 for sections)
2. **Add images** to break up text and illustrate points
3. **Write compelling excerpts** - these appear in listings and search results
4. **Use appropriate tags** to help users find related content
5. **Preview before publishing** to catch formatting issues

### SEO Optimization
1. **SEO Title**: Keep under 60 characters
2. **Meta Description**: 150-160 characters, include keywords
3. **Slug**: Keep short, descriptive, use hyphens
4. **OG Image**: Use 1200x630px for best social media display

### Image Best Practices
1. **Optimize images** before upload (compress to reduce file size)
2. **Use descriptive filenames**
3. **16:9 aspect ratio** works well for most content
4. **Crop thoughtfully** to highlight the subject

### Workflow
1. Create as **Draft** first
2. Write and edit content
3. Add images and formatting
4. Fill in SEO fields
5. Use **Preview** to review
6. **Publish** when ready

## Keyboard Shortcuts

The editor supports standard rich text shortcuts:
- **Ctrl/Cmd + B**: Bold
- **Ctrl/Cmd + I**: Italic
- **Ctrl/Cmd + U**: Underline
- **Ctrl/Cmd + Z**: Undo
- **Ctrl/Cmd + Shift + Z**: Redo

## Troubleshooting

### Images won't upload
- Check Firebase configuration in `src/lib/firebase.ts`
- Verify Firebase Storage is enabled
- Check security rules allow authenticated uploads
- Ensure you're logged in with an authorized account

### Auto-save not working
- Auto-save only works for **existing items** (items that have been saved at least once)
- New items must be manually saved first
- Check the "Last saved" indicator at the bottom of the editor

### Content disappeared after refresh
- This is expected with current in-memory storage
- Data doesn't persist between sessions yet
- Consider saving important content externally until database persistence is implemented

## Support

For issues or questions about the CMS, please contact your development team or refer to the main project documentation.
