#!/usr/bin/env node

/**
 * Template Validation Script
 * Validates that all template files are properly formatted and complete
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// Required template files
const requiredFiles = {
  data: [
    'template-data/profile.example.json',
    'template-data/contact.example.json',
    'template-data/skills.example.json',
    'template-data/projects.example.json',
    'template-data/experience.example.json',
    'template-data/seo.example.json',
    'template-data/navigation.example.json'
  ],
  docs: [
    'docs/README.template.md',
    'docs/SETUP.md',
    'docs/DEPLOYMENT.md',
    'docs/TEMPLATE-SETUP.md'
  ],
  config: [
    'config/package.template.json',
    'config/.gitignore.template',
    'config/LICENSE'
  ],
  scripts: [
    'scripts/setup-template.sh',
    'scripts/create-template-repo.sh'
  ]
};

// JSON structure validation
const jsonSchemas = {
  profile: {
    required: ['name', 'title', 'bio', 'avatar', 'socials', 'resume'],
    types: {
      name: 'string',
      title: 'string',
      bio: 'string',
      avatar: 'string',
      socials: 'object',
      resume: 'object'
    }
  },
  contact: {
    required: ['email', 'location', 'availability'],
    types: {
      email: 'string',
      location: 'string',
      availability: 'string'
    }
  },
  skills: {
    required: ['categories'],
    types: {
      categories: 'array'
    }
  },
  projects: {
    required: ['projects'],
    types: {
      projects: 'array'
    }
  },
  experience: {
    required: ['experience'],
    types: {
      experience: 'array'
    }
  },
  seo: {
    required: ['title', 'description', 'url', 'type', 'keywords', 'author', 'siteName'],
    types: {
      title: 'string',
      description: 'string',
      url: 'string',
      type: 'string',
      keywords: 'array',
      author: 'string',
      siteName: 'string'
    }
  },
  navigation: {
    required: ['items'],
    types: {
      items: 'array'
    }
  }
};

function validateJSON(filePath, schemaName) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(content);
    const schema = jsonSchemas[schemaName];
    
    if (!schema) return true;
    
    let isValid = true;
    
    // Check required fields
    for (const field of schema.required) {
      if (!(field in data)) {
        log(`  ❌ Missing required field: ${field}`, 'red');
        isValid = false;
      } else if (schema.types[field]) {
        const expectedType = schema.types[field];
        const actualType = Array.isArray(data[field]) ? 'array' : typeof data[field];
        
        if (actualType !== expectedType) {
          log(`  ❌ Field ${field} should be ${expectedType}, got ${actualType}`, 'red');
          isValid = false;
        }
      }
    }
    
    return isValid;
  } catch (error) {
    log(`  ❌ JSON parsing error: ${error.message}`, 'red');
    return false;
  }
}

function validateFile(filePath) {
  if (!fs.existsSync(filePath)) {
    log(`❌ ${filePath} - File not found`, 'red');
    return false;
  }
  
  const ext = path.extname(filePath);
  const basename = path.basename(filePath, '.example.json');
  
  if (ext === '.json') {
    const isValid = validateJSON(filePath, basename);
    if (isValid) {
      log(`✅ ${filePath}`, 'green');
    } else {
      log(`❌ ${filePath} - Invalid structure`, 'red');
    }
    return isValid;
  } else {
    // For non-JSON files, just check existence
    const stats = fs.statSync(filePath);
    if (stats.size > 0) {
      log(`✅ ${filePath}`, 'green');
      return true;
    } else {
      log(`⚠️  ${filePath} - Empty file`, 'yellow');
      return false;
    }
  }
}

function validateScripts() {
  log('\n🔧 Validating executable scripts...', 'blue');
  
  const scripts = ['scripts/setup-template.sh', 'scripts/create-template-repo.sh'];
  let allValid = true;
  
  for (const script of scripts) {
    if (fs.existsSync(script)) {
      try {
        fs.accessSync(script, fs.constants.F_OK);
        log(`✅ ${script}`, 'green');
      } catch (error) {
        log(`❌ ${script} - Not accessible`, 'red');
        allValid = false;
      }
    } else {
      log(`❌ ${script} - Not found`, 'red');
      allValid = false;
    }
  }
  
  return allValid;
}

function main() {
  log('🔍 Validating Portfolio Template Structure', 'blue');
  log('==========================================\n');
  
  let totalFiles = 0;
  let validFiles = 0;
  let categoryValid = {};
  
  // Validate each category
  for (const [category, files] of Object.entries(requiredFiles)) {
    log(`📁 Validating ${category.toUpperCase()} files...`, 'blue');
    categoryValid[category] = true;
    
    for (const file of files) {
      totalFiles++;
      if (validateFile(file)) {
        validFiles++;
      } else {
        categoryValid[category] = false;
      }
    }
    log('');
  }
  
  // Validate scripts
  const scriptsValid = validateScripts();
  
  // Summary
  log('📊 VALIDATION SUMMARY', 'blue');
  log('=====================\n');
  
  for (const [category, isValid] of Object.entries(categoryValid)) {
    log(`${isValid ? '✅' : '❌'} ${category.toUpperCase()}: ${isValid ? 'Valid' : 'Issues found'}`);
  }
  
  log(`${scriptsValid ? '✅' : '❌'} SCRIPTS: ${scriptsValid ? 'Valid' : 'Issues found'}`);
  
  log(`\n📈 Overall: ${validFiles}/${totalFiles} files valid`, 
    validFiles === totalFiles ? 'green' : 'yellow');
  
  const allValid = validFiles === totalFiles && scriptsValid && 
    Object.values(categoryValid).every(v => v);
  
  if (allValid) {
    log('\n🎉 Template is ready for publication!', 'green');
    log('\nNext steps:', 'blue');
    log('1. Create a new GitHub repository', 'blue');
    log('2. Copy template files to the new repo', 'blue');
    log('3. Customize package.json and README.md', 'blue');
    log('4. Publish and promote your template', 'blue');
  } else {
    log('\n⚠️  Fix the issues above before publishing', 'yellow');
  }
  
  process.exit(allValid ? 0 : 1);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { validateJSON, validateFile, jsonSchemas };