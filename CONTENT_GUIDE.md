# Portfolio Content Guide

Complete guide for updating all portfolio content using JSON configuration files.

---

## 📁 Overview

All portfolio content is managed through JSON files in the `public/data/` directory. Edit these files directly on GitHub to update your portfolio without touching any code.

**Files:**
- `profile.json` - Personal information
- `skills.json` - Technical skills
- `projects.json` - Portfolio projects
- `experience.json` - Work history
- `contact.json` - Contact information
- `navigation.json` - Menu items
- `seo.json` - SEO metadata

---

## 👤 profile.json - Personal Information

### Complete Structure

```json
{
  "name": "Your Full Name",
  "title": "Your Professional Title",
  "bio": "Your professional biography",
  "avatar": "https://example.com/your-avatar.jpg",
  "email": "your.email@example.com",
  "location": "City, Country",
  "socials": {
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourprofile",
    "email": "mailto:your.email@example.com"
  }
}
```

### Field-by-Field Guide

#### `name` (Required)
- **Type:** String
- **Purpose:** Display name on portfolio
- **Example:** `"Ankit Jangwan"`
- **Tips:** Use your full professional name

#### `title` (Required)
- **Type:** String
- **Purpose:** Professional title/role
- **Example:** `"Full Stack Developer | Cloud Integration Expert"`
- **Tips:** Keep it concise, use `|` for multiple titles

#### `bio` (Required)
- **Type:** String
- **Purpose:** Professional biography
- **Example:** `"Passionate about creating elegant solutions..." (200-300 chars)`
- **Tips:** 
  - Write in first person ("I am", not "He is")
  - Highlight key skills and experience
  - Keep it professional and engaging

#### `avatar` (Required)
- **Type:** String (URL)
- **Purpose:** Profile picture
- **Example:** `"https://avatars.githubusercontent.com/u/105637896?v=4"`
- **Tips:**
  - Recommended size: 150x150px or 200x200px
  - Use square images
  - Supported formats: JPG, PNG, WebP
  - Can use GitHub avatar, LinkedIn photo, or custom URL

#### `email` (Required)
- **Type:** String (email address)
- **Purpose:** Contact email
- **Example:** `"jangwanankitofficial@gmail.com"`
- **Tips:** Use professional email address

#### `location` (Optional)
- **Type:** String
- **Purpose:** Geographic location
- **Example:** `"Delhi, India"`
- **Tips:** Include city and country

#### `socials` (Required)
- **Type:** Object
- **Purpose:** Social media links

**`socials.github`** (Optional)
- **Type:** String (URL)
- **Example:** `"https://github.com/yourusername"`
- **Format:** Full GitHub profile URL
- **Tips:** Include `https://` prefix

**`socials.linkedin`** (Optional)
- **Type:** String (URL)
- **Example:** `"https://linkedin.com/in/yourprofile"`
- **Format:** Full LinkedIn profile URL
- **Tips:** Use public profile URL

**`socials.email`** (Required)
- **Type:** String (mailto URL)
- **Example:** `"mailto:your.email@example.com"`
- **Format:** Must start with `mailto:`
- **Tips:** Same email as main `email` field

### Quick Updates

**Change your name:**
```json
"name": "New Name"
```

**Update title:**
```json
"title": "New Role at New Company"
```

**Add LinkedIn:**
```json
"socials": {
  "linkedin": "https://linkedin.com/in/your-new-profile"
}
```

**Remove social link:**
```json
"socials": {
  "github": "https://github.com/yourusername",
  "linkedin": "https://linkedin.com/in/yourprofile"
  // "email" cannot be removed
}
```

---

## 💼 skills.json - Technical Skills

### Complete Structure

```json
{
  "categories": [
    {
      "title": "Category Name",
      "icon": "IconName",
      "skills": ["Skill 1", "Skill 2", "Skill 3"]
    }
  ]
}
```

### Field-by-Field Guide

#### `categories` (Required)
- **Type:** Array of objects
- **Purpose:** List of skill categories

#### `title` (Required, per category)
- **Type:** String
- **Purpose:** Category display name
- **Examples:** `"Frontend"`, `"Backend"`, `"DevOps"`
- **Tips:** Keep it short (1-3 words)

#### `icon` (Required, per category)
- **Type:** String
- **Purpose:** Lucide icon name
- **Valid Options:**
  - `"Layout"` - Frontend/UI
  - `"Server"` - Backend/API
  - `"Database"` - Databases
  - `"Code2"` - Programming languages
  - `"Terminal"` - Tools/CLI
  - `"Settings"` - Other/Soft skills
- **Case Sensitive:** Must match exactly

#### `skills` (Required, per category)
- **Type:** Array of strings
- **Purpose:** List of skills in this category
- **Examples:** `["React", "TypeScript", "Tailwind CSS"]`
- **Tips:**
  - Use proper capitalization (React, not react)
  - Limit to 8-10 skills per category
  - Most important skills first

### Adding Skills

**Add new category:**
```json
{
  "categories": [
    // existing categories...
    {
      "title": "Cloud",
      "icon": "Terminal",
      "skills": ["AWS", "Azure", "GCP"]
    }
  ]
}
```

**Add skill to existing category:**
```json
{
  "title": "Frontend",
  "icon": "Layout",
  "skills": ["React", "TypeScript", "Tailwind CSS", "Next.js"]
  // Just add "Next.js" to the array
}
```

**Remove skill:**
```json
{
  "title": "Frontend",
  "icon": "Layout",
  "skills": ["React", "TypeScript", "Tailwind CSS"]
  // Removed "Next.js"
}
```

**Reorder skills:**
```json
{
  "skills": ["TypeScript", "React", "Tailwind CSS"]
  // Most important skills first
}
```

---

## 🚀 projects.json - Portfolio Projects

### Complete Structure

```json
{
  "projects": [
    {
      "title": "Project Name",
      "description": "Project description (150-250 chars)",
      "image": "https://example.com/project-image.jpg",
      "technologies": [
        {"name": "Technology 1"},
        {"name": "Technology 2"}
      ],
      "liveUrl": "https://project-demo.com",
      "sourceUrl": "https://github.com/username/repo",
      "status": "ongoing",
      "featured": true
    }
  ]
}
```

### Field-by-Field Guide

#### `title` (Required, per project)
- **Type:** String
- **Purpose:** Project display name
- **Example:** `"Dynamics Classes"`
- **Tips:** 
  - Keep it short (2-5 words)
  - Use capitalization
  - Include main function if relevant

#### `description` (Required, per project)
- **Type:** String
- **Purpose:** Brief project description
- **Length:** 150-250 characters
- **Example:** `"A comprehensive educational platform with SEO optimization"`
- **Tips:**
  - Focus on what makes it unique
  - Mention key features
  - Keep it engaging

#### `image` (Required, per project)
- **Type:** String (URL)
- **Purpose:** Project thumbnail/preview
- **Example:** `"https://images.unsplash.com/photo-xxx?w=800&h=400"`
- **Recommended Size:** 800x400px (16:9 ratio)
- **Tips:**
  - Use high-quality images
  - Unsplash, Pexels, or your own screenshots
  - Must start with `https://`

#### `technologies` (Required, per project)
- **Type:** Array of objects
- **Purpose:** Tech stack used
- **Format:** Each item must have `name` key
- **Example:**
  ```json
  "technologies": [
    {"name": "React"},
    {"name": "TypeScript"},
    {"name": "Tailwind CSS"}
  ]
  ```
- **Tips:**
  - 4-8 technologies maximum
  - Most important first
  - Use proper capitalization

#### `liveUrl` (Required, per project)
- **Type:** String (URL)
- **Purpose:** Live/demo URL
- **Example:** `"https://dynamicsclasses.com/"`
- **Tips:**
  - Must start with `https://`
  - Use real, working URL
  - Test before publishing

#### `sourceUrl` (Optional, per project)
- **Type:** String (URL)
- **Purpose:** Source code repository
- **Example:** `"https://github.com/username/repo"`
- **Tips:**
  - GitHub, GitLab, or Bitbucket
  - Omit if private
  - Must start with `https://`

#### `status` (Required, per project)
- **Type:** String
- **Purpose:** Project status badge
- **Valid Options:**
  - `"ongoing"` - Shows "In Progress" (yellow badge)
  - `"completed"` - Shows "Completed" (green badge)
- **Case Sensitive:** Must be lowercase
- **Examples:**
  ```json
  "status": "ongoing"
  "status": "completed"
  ```

#### `featured` (Optional, per project)
- **Type:** Boolean
- **Purpose:** Highlight important projects
- **Default:** `false`
- **Usage:** Set to `true` for your best work

### Adding Projects

**Add new project:**
```json
{
  "projects": [
    // existing projects...
    {
      "title": "New Project",
      "description": "A brief description of the project",
      "image": "https://example.com/new-project.jpg",
      "technologies": [
        {"name": "React"},
        {"name": "Node.js"}
      ],
      "liveUrl": "https://newproject.com",
      "sourceUrl": "https://github.com/username/newproject",
      "status": "ongoing"
    }
  ]
}
```

**Update project status:**
```json
{
  "title": "Dynamics Classes",
  "status": "completed"  // Changed from "ongoing"
}
```

**Add technology to project:**
```json
{
  "technologies": [
    {"name": "React"},
    {"name": "TypeScript"},
    {"name": "Tailwind CSS"},
    {"name": "Next.js"}  // Added new tech
  ]
}
```

**Remove project:**
```json
{
  "projects": [
    // Keep projects you want
  ]
  // Just delete the project object from the array
}
```

---

## 💼 experience.json - Work Experience

### Complete Structure

```json
{
  "experience": [
    {
      "company": "Company Name",
      "role": "Job Title",
      "duration": "Jan 2020 – Dec 2022",
      "location": "City, Country",
      "logo": "https://example.com/company-logo.png",
      "details": [
        "Key achievement or responsibility 1",
        "Key achievement or responsibility 2",
        "Key achievement or responsibility 3"
      ]
    }
  ]
}
```

### Field-by-Field Guide

#### `company` (Required, per experience)
- **Type:** String
- **Purpose:** Company name
- **Example:** `"Cloudify"`, `"Google"`, `"Microsoft"`
- **Tips:** Use official company name

#### `role` (Required, per experience)
- **Type:** String
- **Purpose:** Job title
- **Example:** `"Business Integration Specialist"`, `"Senior Software Engineer"`
- **Tips:** Use official job title

#### `duration` (Required, per experience)
- **Type:** String
- **Purpose:** Employment time period
- **Format:** `"Month Year – Month Year"`
- **Examples:**
  - `"Jan 2020 – Dec 2022"`
  - `"May 2022 – Present"` (for current role)
  - `"Aug 2024 – Dec 2024"`
- **Tips:** 
  - Use 3-letter month abbreviations
  - Use en-dash `–` (not hyphen `-`)
  - Use "Present" for current job

#### `location` (Required, per experience)
- **Type:** String
- **Purpose:** Work location
- **Example:** `"Delhi, India"`, `"Remote"`, `"San Francisco, CA"`
- **Tips:** Include city and country/state

#### `logo` (Required, per experience)
- **Type:** String (URL)
- **Purpose:** Company logo
- **Example:** `"https://cms.cloudify.biz/uploads/logo.svg"`
- **Recommended Size:** 48x48px or similar
- **Tips:**
  - Use official company logo URL
  - SVG format preferred
  - Fallback to first letter if fails

#### `details` (Required, per experience)
- **Type:** Array of strings
- **Purpose:** Key achievements/responsibilities
- **Recommended Count:** 3-5 items
- **Format:** Each item is a bullet point
- **Example:**
  ```json
  "details": [
    "Led development team of 5 engineers",
    "Implemented CI/CD pipeline reducing deployment time by 50%",
    "Built scalable API handling 1M+ requests/day"
  ]
  ```
- **Tips:**
  - Use action verbs (Led, Built, Implemented)
  - Include metrics/numbers when possible
  - Focus on achievements, not just responsibilities
  - Keep each point concise (1-2 sentences)

### Adding Experience

**Add new job:**
```json
{
  "experience": [
    // existing experience...
    {
      "company": "New Company",
      "role": "Senior Developer",
      "duration": "Jan 2025 – Present",
      "location": "Remote",
      "logo": "https://company.com/logo.png",
      "details": [
        "Led development of new features",
        "Mentored junior developers",
        "Improved system performance by 30%"
      ]
    }
  ]
}
```

**Add achievement to existing job:**
```json
{
  "company": "Cloudify",
  "details": [
    "Achievement 1",
    "Achievement 2",
    "New achievement added here"
  ]
}
```

**Update job duration (when leaving a job):**
```json
{
  "company": "Current Company",
  "duration": "May 2022 – Dec 2024"  // Was "Present"
}
```

**Remove experience:**
```json
{
  "experience": [
    // Keep jobs you want to show
  ]
  // Delete the experience object
}
```

---

## 📧 contact.json - Contact Information

### Complete Structure

```json
{
  "email": "your.email@example.com",
  "location": "City, Country",
  "availability": "Available for new opportunities"
}
```

### Field-by-Field Guide

#### `email` (Required)
- **Type:** String
- **Purpose:** Contact email
- **Example:** `"jangwanankitofficial@gmail.com"`
- **Tips:** Use professional email

#### `location` (Optional)
- **Type:** String
- **Purpose:** Geographic location
- **Example:** `"Delhi, India"`, `"Remote"`
- **Tips:** Same as profile location

#### `availability` (Optional)
- **Type:** String
- **Purpose:** Work availability status
- **Examples:**
  - `"Available for new opportunities"`
  - `"Open to freelance projects"`
  - `"Not looking for new opportunities"`
  - `"Available for remote work only"`
- **Tips:** Update based on current situation

### Quick Updates

**Update email:**
```json
{
  "email": "new.email@example.com"
}
```

**Update availability status:**
```json
{
  "availability": "Not accepting new clients currently"
}
```

---

## 🧭 navigation.json - Menu Items

### Complete Structure

```json
{
  "items": [
    {
      "label": "Section Name",
      "icon": "IconName",
      "href": "#section-id"
    }
  ]
}
```

### Field-by-Field Guide

#### `label` (Required, per item)
- **Type:** String
- **Purpose:** Menu item display text
- **Examples:** `"About"`, `"Skills"`, `"Projects"`
- **Tips:** Short, clear labels

#### `icon` (Required, per item)
- **Type:** String
- **Purpose:** Lucide icon name
- **Valid Options:**
  - `"User2"` - About section
  - `"Code2"` - Skills section
  - `"Briefcase"` - Projects section
  - `"Building"` - Experience section
  - `"Mail"` - Contact section
- **Case Sensitive:** Must match exactly

#### `href` (Required, per item)
- **Type:** String
- **Purpose:** Link target (section ID)
- **Format:** `"#section-id"`
- **Examples:** `"#about"`, `"#skills"`, `"#projects"`
- **Tips:** 
  - Must match section ID in HTML
  - Must start with `#`
  - Should be lowercase

### Adding/Removing Menu Items

**Add new menu item:**
```json
{
  "items": [
    // existing items...
    {
      "label": "Blog",
      "icon": "Code2",
      "href": "#blog"
    }
  ]
}
```

**Remove menu item:**
```json
{
  "items": [
    {"label": "About", "icon": "User2", "href": "#about"},
    {"label": "Skills", "icon": "Code2", "href": "#skills"}
    // Removed other items
  ]
}
```

**Reorder menu items:**
```json
{
  "items": [
    {"label": "Contact", "icon": "Mail", "href": "#contact"},
    {"label": "About", "icon": "User2", "href": "#about"}
    // Contact will show first
  ]
}
```

---

## 🔍 seo.json - SEO Metadata

### Complete Structure

```json
{
  "title": "Ankit Jangwan - Full Stack Developer",
  "description": "Full Stack Developer with 4+ years of experience...",
  "image": "https://example.com/og-image.jpg",
  "url": "https://your-portfolio.com",
  "type": "website",
  "keywords": [
    "Full Stack Developer",
    "Web Development",
    "React",
    "TypeScript"
  ],
  "author": "Ankit Jangwan",
  "siteName": "Ankit Jangwan Portfolio"
}
```

### Field-by-Field Guide

#### `title` (Required)
- **Type:** String
- **Purpose:** Page title (shows in browser tab)
- **Length:** 50-60 characters optimal
- **Example:** `"Ankit Jangwan - Full Stack Developer"`
- **Tips:**
  - Include your name
  - Include main role/specialty
  - Keep it concise

#### `description` (Required)
- **Type:** String
- **Purpose:** SEO description (shows in search results)
- **Length:** 150-160 characters optimal
- **Example:** `"Full Stack Developer with 4+ years in web development, specializing in React, TypeScript, and cloud integration."`
- **Tips:**
  - Include keywords
  - Write for humans (not bots)
  - Call to action optional

#### `image` (Required)
- **Type:** String (URL)
- **Purpose:** Open Graph/Twitter card image
- **Size:** 1200x630px (1.91:1 ratio) recommended
- **Example:** `"https://avatars.githubusercontent.com/u/105637896?v=4"`
- **Tips:**
  - High quality image
  - Your photo or portfolio preview
  - JPG or PNG format
  - Under 5MB

#### `url` (Required)
- **Type:** String (URL)
- **Purpose:** Portfolio URL
- **Example:** `"https://ankit-rana-portfolio.pages.dev"`
- **Tips:** 
  - Use full URL with `https://`
  - No trailing slash
  - Your actual portfolio URL

#### `type` (Required)
- **Type:** String
- **Purpose:** Open Graph type
- **Options:** `"website"` or `"article"`
- **Default:** `"website"`
- **Tips:** Keep as `"website"` for portfolio

#### `keywords` (Required)
- **Type:** Array of strings
- **Purpose:** SEO keywords
- **Count:** 5-10 keywords recommended
- **Example:**
  ```json
  "keywords": [
    "Full Stack Developer",
    "Web Development",
    "React",
    "TypeScript",
    "Node.js",
    "Cloud Integration"
  ]
  ```
- **Tips:**
  - Mix broad and specific terms
  - Include your main technologies
  - Realistic terms people search for

#### `author` (Required)
- **Type:** String
- **Purpose:** Page author
- **Example:** `"Ankit Jangwan"`
- **Tips:** Same as profile name

#### `siteName` (Required)
- **Type:** String
- **Purpose:** Site name (for social sharing)
- **Example:** `"Ankit Jangwan Portfolio"`
- **Tips:** Simple, descriptive name

### Quick Updates

**Update title when changing roles:**
```json
{
  "title": "Ankit Jangwan - Senior Software Engineer"
}
```

**Update description for new focus:**
```json
{
  "description": "Senior Software Engineer specializing in distributed systems and microservices architecture."
}
```

**Update URL when changing domain:**
```json
{
  "url": "https://new-portfolio.com"
}
```

---

## 🛠️ Common Mistakes to Avoid

### JSON Syntax Errors

**❌ Wrong:**
```json
{
  "name": "John",
  "title": "Developer",    // Trailing comma
}
```

**✅ Right:**
```json
{
  "name": "John",
  "title": "Developer"
}
```

### Missing Required Fields

**❌ Wrong:**
```json
{
  "title": "My Project",
  "description": "Great project"
  // Missing "image", "technologies", "liveUrl", "status"
}
```

**✅ Right:**
```json
{
  "title": "My Project",
  "description": "Great project",
  "image": "https://example.com/image.jpg",
  "technologies": [{"name": "React"}],
  "liveUrl": "https://demo.com",
  "status": "ongoing"
}
```

### Incorrect Data Types

**❌ Wrong:**
```json
{
  "skills": "React, TypeScript"  // Should be array
}
```

**✅ Right:**
```json
{
  "skills": ["React", "TypeScript"]  // Array
}
```

### Case Sensitivity

**❌ Wrong:**
```json
{
  "icon": "server"  // Wrong case
}
```

**✅ Right:**
```json
{
  "icon": "Server"  // Correct case
}
```

### Invalid URLs

**❌ Wrong:**
```json
{
  "liveUrl": "www.project.com"  // Missing https://
}
```

**✅ Right:**
```json
{
  "liveUrl": "https://www.project.com"  // Full URL
}
```

---

## ✅ Validation Checklist

Before committing changes, verify:

### General
- [ ] JSON is valid (use [JSONLint](https://jsonlint.com/))
- [ ] No trailing commas
- [ ] Double quotes for all strings and keys
- [ ] All required fields are present

### Profile
- [ ] Name is spelled correctly
- [ ] Email is valid and professional
- [ ] Social links are full URLs with https://
- [ ] Avatar URL is accessible

### Skills
- [ ] Icon names are valid
- [ ] Skills are properly capitalized
- [ ] No duplicate skills
- [ ] Categories make sense

### Projects
- [ ] All required fields present
- [ ] Image URLs work
- [ ] Live/demo URLs work
- [ ] Source URLs (if present) work
- [ ] Status is "ongoing" or "completed"
- [ ] Technologies have proper structure

### Experience
- [ ] Duration format is correct (Month Year – Month Year)
- [ ] Logo URLs are accessible
- [ ] Details use action verbs
- [ ] Achievements are quantified where possible

### Contact
- [ ] Email is valid
- [ ] Location matches profile

### Navigation
- [ ] Href values match section IDs
- [ ] Icons are valid
- [ ] Links work on page

### SEO
- [ ] Title is under 60 chars
- [ ] Description is 150-160 chars
- [ ] Image is 1200x630px (or close)
- [ ] URL is correct portfolio URL
- [ ] Keywords are relevant

---

## 📱 Mobile Editing Quick Tips

### Using GitHub Mobile App

1. **Open your repository**
2. **Navigate to `public/data/`**
3. **Tap on JSON file**
4. **Tap edit (pencil icon)**
5. **Make changes**
6. **Tap "Commit changes"**
7. **Add descriptive message**
8. **Tap "Commit"**

### Common Mobile Issues

**Issue:** Code editing is hard on phone
**Solution:** Use a JSON editor app, copy-paste to GitHub

**Issue:** Can't see full JSON structure
**Solution:** Use mobile web (m.github.com) for better editing

**Issue:** Accidentally broke JSON
**Solution:** Use GitHub's "Discard changes" button, try again

---

## 🚀 Quick Update Examples

### Added a new project
```bash
# Commit message
Add "AI Chat Assistant" project to portfolio
```

### Updated job title
```bash
# Commit message
Update title at Cloudify to Business Integration Specialist
```

### Added new skill
```bash
# Commit message
Add Next.js to Frontend skills
```

### Updated bio
```bash
# Commit message
Update bio with new experience at TechCorp
```

---

## 📚 Additional Resources

- [JSON Validator](https://jsonlint.com/)
- [GitHub Markdown Guide](https://guides.github.com/features/mastering-markdown/)
- [SEO Title Checker](https://www.portent.com/serp-preview/)
- [Image Resizer](https://www.simpleimageresizer.com/)

---

## 💡 Pro Tips

1. **Backup before major changes:** Copy JSON content to a text file
2. **Update incrementally:** Change one thing at a time, test, commit
3. **Use Git history:** GitHub shows all previous versions
4. **Test URLs:** Verify all links work before pushing
5. **Keep descriptions concise:** People scan, don't read long text
6. **Update regularly:** Fresh content keeps portfolio relevant
7. **Use metrics:** Numbers make achievements impressive ("increased by 50%")

---

**Need help?** Check the main README.md for setup and deployment instructions.