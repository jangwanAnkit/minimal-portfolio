#!/bin/bash

# Create Template Repository Script
# This script helps create a new template repository from your portfolio

set -e  # Exit on any error

echo "🏗️  Creating Portfolio Template Repository"
echo "========================================"

# Get user input
echo ""
read -p "Enter your GitHub username: " USERNAME
read -p "Enter repository name (default: portfolio-template): " REPO_NAME
REPO_NAME=${REPO_NAME:-portfolio-template}

# Validate input
if [ -z "$USERNAME" ]; then
    echo "❌ Error: GitHub username is required"
    exit 1
fi

echo ""
echo "📋 Repository Configuration:"
echo "  Username: $USERNAME"
echo "  Repository: $REPO_NAME"
echo ""

read -p "Continue? (y/N): " CONFIRM
if [[ ! $CONFIRM =~ ^[Yy]$ ]]; then
    echo "❌ Cancelled"
    exit 0
fi

# Create template directory
TEMPLATE_DIR="$REPO_NAME-template"
echo "📁 Creating template in: $TEMPLATE_DIR"

if [ -d "$TEMPLATE_DIR" ]; then
    echo "⚠️  Directory $TEMPLATE_DIR already exists"
    read -p "Remove it and continue? (y/N): " REMOVE
    if [[ ! $REMOVE =~ ^[Yy]$ ]]; then
        echo "❌ Cancelled"
        exit 0
    fi
    rm -rf "$TEMPLATE_DIR"
fi

mkdir -p "$TEMPLATE_DIR"
cd "$TEMPLATE_DIR"

# Copy core files (not the template-specific ones)
echo "📋 Copying core application files..."
cp -r ../src .
cp -r ../public .
cp ../index.html .
cp ../vite.config.ts .
cp ../tailwind.config.js .
cp ../tsconfig.json .
cp ../tsconfig.node.json .
cp ../postcss.config.js .
cp ../eslint.config.js .

# Copy and update package.json
echo "📦 Setting up package.json..."
cp ../config/package.template.json package.json

# Update repository URLs in package.json
sed -i "s/YOUR_USERNAME/$USERNAME/g" package.json
sed -i "s/portfolio-template/$REPO_NAME/g" package.json

# Copy template data files
echo "📋 Copying template data files..."
mkdir -p public/data
cp ../template-data/*.example.json public/data/

# Copy documentation
echo "📚 Copying documentation..."
cp ../docs/README.template.md README.md
cp ../docs/SETUP.md .
cp ../docs/DEPLOYMENT.md .
cp ../config/.gitignore.template .gitignore
cp ../config/LICENSE .

# Update README.md with user-specific info
echo "✏️  Updating README.md..."
sed -i "s/YOUR_USERNAME/$USERNAME/g" README.md
sed -i "s/portfolio-template/$REPO_NAME/g" README.md

# Create setup script
echo "🔧 Creating setup script..."
mkdir -p scripts
cat > scripts/setup.sh << 'EOF'
#!/bin/bash
echo "🚀 Setting up portfolio..."

# Copy example files
for file in profile contact skills projects experience seo navigation; do
    cp "public/data/${file}.example.json" "public/data/${file}.json"
done

# Install dependencies
npm install

echo "✅ Setup complete! Edit JSON files with your information."
EOF

chmod +x scripts/setup.sh

# Create GitHub repository initialization
echo "🐙 Preparing Git repository..."
git init
git add .
git commit -m "Initial commit - Portfolio Template"

echo ""
echo "🎉 Template repository created successfully!"
echo "========================================="
echo ""
echo "Next steps:"
echo "1. cd $TEMPLATE_DIR"
echo "2. Create repository on GitHub: https://github.com/new"
echo "3. Link and push:"
echo "   git remote add origin https://github.com/$USERNAME/$REPO_NAME.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "Repository location: $PWD"
echo ""
echo "📝 Don't forget to:"
echo "- Add a good repository description"
echo "- Add relevant topics/tags"
echo "- Include a screenshot of the demo"
echo "- Write a compelling README introduction"
echo "- Create a live demo site"