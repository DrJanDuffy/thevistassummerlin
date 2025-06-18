# PowerShell script to rename subcommunity images to match slug names
# Place this script in the same folder as your images and run it from there

# List of subcommunity slugs (update as needed)
$subcommunities = @(
    'Amber-Hills', 'Andorra', 'Barcelona', 'Belmonte', 'Cielo', 'Cortona', 'Cresta-Del-Sol', 'Granite-Peaks',
    'Mariposa', 'Montecito', 'Montaire', 'Palomar', 'Santaluz', 'Serrano', 'Sierra-Woods', 'Solano',
    'Sonesta', 'Summerfield', 'Talavera', 'The-Estates', 'The-Palms', 'The-Pointe', 'Traccia',
    'Wisteria-Hills', 'Woodbridge', 'Yorkshire', 'Vistara', 'Vistara-Ridge', 'Vistara-View'
)

# Supported image extensions (add more if needed)
$extensions = @('jpg', 'jpeg', 'png', 'heic', 'JPG', 'JPEG', 'PNG', 'HEIC')

Write-Host "Starting subcommunity image renaming..." -ForegroundColor Cyan

foreach ($slug in $subcommunities) {
    $found = $false
    foreach ($ext in $extensions) {
        $pattern = "IMG_*.$ext"
        $files = Get-ChildItem -File -Filter $pattern | Sort-Object LastWriteTime -Descending
        if ($files.Count -gt 0) {
            $file = $files[0]  # Use the most recent matching file
            $newName = "$slug.$ext"
            if (Test-Path $newName) {
                Write-Host "[SKIP] $newName already exists. Not overwriting." -ForegroundColor Yellow
                continue
            }
            Write-Host "Renaming '$($file.Name)' to '$newName'..." -ForegroundColor Green
            Rename-Item -Path $file.FullName -NewName $newName
            $found = $true
            break
        }
    }
    if (-not $found) {
        Write-Host "[WARN] No image found for $slug (tried extensions: $($extensions -join ', '))" -ForegroundColor Red
    }
}

Write-Host "Renaming complete. Please review the results above." -ForegroundColor Cyan 