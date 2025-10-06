#!/bin/bash
# Fix the TypeScript naming conflict in app/blog/page.tsx
# Run this in your summerlinwestrealestate repository root

echo "🔧 Fixing TypeScript naming conflict in app/blog/page.tsx..."

# Check if we're in the right directory
if [ ! -f "app/blog/page.tsx" ]; then
    echo "❌ Error: app/blog/page.tsx not found. Are you in the project root?"
    exit 1
fi

# Create backup
cp app/blog/page.tsx app/blog/page.tsx.backup
echo "✅ Created backup: app/blog/page.tsx.backup"

# Fix the file - replace 'import dynamic' with 'import dynamicImport'
# and update all usages
sed -i.tmp "s/import dynamic from 'next\/dynamic'/import dynamicImport from 'next\/dynamic'/g" app/blog/page.tsx
sed -i.tmp "s/const RealScoutOfficeListingsWrapper = dynamic(/const RealScoutOfficeListingsWrapper = dynamicImport(/g" app/blog/page.tsx

# Remove temp file
rm -f app/blog/page.tsx.tmp

echo "✅ Fixed naming conflict in app/blog/page.tsx"
echo ""
echo "📝 Changes made:"
echo "   Line 8: import dynamic → import dynamicImport"
echo "   Line 10: dynamic(() → dynamicImport(("
echo "   Line 11: export const dynamic = 'force-dynamic' (unchanged)"
echo ""
echo "🔍 Verifying changes..."

# Show the relevant lines
echo "Lines 8-11 now look like this:"
sed -n '8,11p' app/blog/page.tsx
echo ""

# Check if the fix was applied correctly
if grep -q "import dynamicImport from 'next/dynamic'" app/blog/page.tsx && \
   grep -q "export const dynamic = 'force-dynamic'" app/blog/page.tsx; then
    echo "✅ Fix verified successfully!"
    echo ""
    echo "📤 Next steps:"
    echo "   1. Review the changes: git diff app/blog/page.tsx"
    echo "   2. Commit: git add app/blog/page.tsx"
    echo "   3. Commit: git commit -m 'fix: resolve TypeScript naming conflict in blog page'"
    echo "   4. Push: git push origin main"
    echo ""
    echo "   Vercel will automatically deploy once you push."
else
    echo "⚠️  Warning: Fix may not have been applied correctly."
    echo "   Restoring from backup..."
    mv app/blog/page.tsx.backup app/blog/page.tsx
    echo "   Please manually edit app/blog/page.tsx"
fi
