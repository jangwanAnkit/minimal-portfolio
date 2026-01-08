#!/bin/bash

# Portfolio Template Setup Script
# This script helps users quickly set up their personal portfolio from the template

set -e  # Exit on any error

echo "🚀 Setting up your portfolio template..."
echo "=================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Create data directory if it doesn't exist
mkdir -p public/data

# Copy example files to working files if they don't exist
echo "📋 Setting up data files..."

files=("profile" "contact" "skills" "projects" "experience" "seo" "navigation")
skipped_files=()

for file in "${files[@]}"; do
    example_file="template-data/${file}.example.json"
    target_file="public/data/${file}.json"
    
    if [ ! -f "$target_file" ]; then
        if [ -f "$example_file" ]; then
            cp "$example_file" "$target_file"
            echo "✅ Created ${target_file}"
        else
            echo "⚠️  Example file ${example_file} not found"
        fi
    else
        skipped_files+=("$target_file")
    fi
done

# Report skipped files
if [ ${#skipped_files[@]} -gt 0 ]; then
    echo "ℹ️  Files already exist, skipping:"
    for file in "${skipped_files[@]}"; do
        echo "   - $file"
    done
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
else
    echo "📦 Dependencies already installed"
fi

# Create .env file if it doesn't exist
if [ ! -f ".env" ]; then
    echo "⚙️  Creating .env file..."
    cat > .env << EOF
# Portfolio Configuration
VITE_SITE_URL=http://localhost:5173
VITE_SITE_NAME="Your Name - Portfolio"

# Optional: Analytics (remove if not needed)
# VITE_GA_ID=G-XXXXXXXXXX
# VITE_POSTHOG_API_KEY=your_api_key
EOF
    echo "✅ Created .env file - customize it with your settings"
fi

# Success message
echo ""
echo "🎉 Setup complete!"
echo "=================="
echo ""
echo "Next steps:"
echo "1. 📝 Edit the JSON files in public/data/ with your personal information"
echo "2. 🎨 Customize colors and styling in src/index.css if needed"
echo "3. 🚀 Start development: npm run dev"
echo "4. 🌐 Deploy: npm run build (then deploy the 'dist' folder)"
echo ""
echo "📚 Documentation available:"
echo "- SETUP.md for detailed instructions"
echo "- DEPLOYMENT.md for deployment options"
echo ""
echo "💡 Tip: Start with profile.json and contact.json to get your basics set up!"