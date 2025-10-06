# PowerShell script to fix TypeScript naming conflict in blog page
# Run this in your project root directory

Write-Host "🔧 Fixing TypeScript naming conflict in blog page..." -ForegroundColor Cyan

# Check if we're in the right directory
if (-not (Test-Path "src/app/(routes)/blog/page.tsx")) {
    Write-Host "❌ Error: src/app/(routes)/blog/page.tsx not found. Are you in the project root?" -ForegroundColor Red
    exit 1
}

# Create backup
Copy-Item "src/app/(routes)/blog/page.tsx" "src/app/(routes)/blog/page.tsx.backup"
Write-Host "✅ Created backup: src/app/(routes)/blog/page.tsx.backup" -ForegroundColor Green

# Read the file content
$content = Get-Content "src/app/(routes)/blog/page.tsx" -Raw

# Check if the file has the dynamic import issue
if ($content -match "import dynamic from 'next/dynamic'") {
    # Fix the file - replace 'import dynamic' with 'import dynamicImport'
    $content = $content -replace "import dynamic from 'next/dynamic'", "import dynamicImport from 'next/dynamic'"
    $content = $content -replace "const RealScoutOfficeListingsWrapper = dynamic\(", "const RealScoutOfficeListingsWrapper = dynamicImport("
    
    # Write the fixed content back
    Set-Content "src/app/(routes)/blog/page.tsx" $content
    
    Write-Host "✅ Fixed naming conflict in blog page" -ForegroundColor Green
    Write-Host ""
    Write-Host "📝 Changes made:" -ForegroundColor Yellow
    Write-Host "   - import dynamic → import dynamicImport"
    Write-Host "   - dynamic(() → dynamicImport(("
    Write-Host "   - export const dynamic = 'force-dynamic' (unchanged)"
    Write-Host ""
    
    Write-Host "🔍 Verifying changes..." -ForegroundColor Cyan
    
    # Check if the fix was applied correctly
    $newContent = Get-Content "src/app/(routes)/blog/page.tsx" -Raw
    if ($newContent -match "import dynamicImport from 'next/dynamic'" -and $newContent -match "export const dynamic = 'force-dynamic'") {
        Write-Host "✅ Fix verified successfully!" -ForegroundColor Green
        Write-Host ""
        Write-Host "📤 Next steps:" -ForegroundColor Yellow
        Write-Host "   1. Review the changes: git diff src/app/(routes)/blog/page.tsx"
        Write-Host "   2. Commit: git add src/app/(routes)/blog/page.tsx"
        Write-Host "   3. Commit: git commit -m 'fix: resolve TypeScript naming conflict in blog page'"
        Write-Host "   4. Push: git push origin main"
        Write-Host ""
        Write-Host "   Vercel will automatically deploy once you push." -ForegroundColor Cyan
    } else {
        Write-Host "⚠️  Warning: Fix may not have been applied correctly." -ForegroundColor Yellow
        Write-Host "   Restoring from backup..." -ForegroundColor Yellow
        Move-Item "src/app/(routes)/blog/page.tsx.backup" "src/app/(routes)/blog/page.tsx"
        Write-Host "   Please manually edit src/app/(routes)/blog/page.tsx" -ForegroundColor Yellow
    }
} else {
    Write-Host "ℹ️  No TypeScript naming conflict found in blog page." -ForegroundColor Blue
    Write-Host "   The file appears to be already fixed or doesn't have the issue." -ForegroundColor Blue
}
