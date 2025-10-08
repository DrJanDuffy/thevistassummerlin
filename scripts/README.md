# Supabase Schema Manager - 2025 Edition

Modern schema management using Supabase's latest features with declarative configuration and automated validation.

## 🚀 Quick Start

```bash
# Initialize schema management
node scripts/schema-manager.js init

# Create a new migration
node scripts/schema-manager.js create add_property_listings_table

# Apply migrations
node scripts/schema-manager.js apply

# Validate migrations
node scripts/schema-manager.js validate
```

## 📋 Features

### ✨ 2025 Modern Features
- **Declarative Schema Configuration** - Define schema in centralized, version-controlled files
- **Automated Migration Validation** - Pre-flight checks for dangerous operations
- **Environment Management** - Seamless switching between dev/staging/prod
- **CI/CD Integration** - GitHub Actions workflow for automated validation
- **TypeScript Type Generation** - Auto-generated types from current schema
- **Rollback Capabilities** - Safe migration rollback with validation

### 🔧 Core Capabilities
- Migration creation with modern templates
- Schema version tracking
- Migration history management
- Environment-specific configurations
- Automated type generation
- CI/CD pipeline integration

## 📁 Project Structure

```
supabase/
├── migrations/           # SQL migration files
├── types/              # Generated TypeScript types
├── seed/               # Database seed files
├── functions/           # Edge functions
├── config/             # Environment configurations
├── schema.sql          # Declarative schema definition
└── config.toml         # Supabase configuration
```

## 🛠️ Commands

### Initialization
```bash
# Initialize schema management system
node scripts/schema-manager.js init
```

### Migration Management
```bash
# Create new migration
node scripts/schema-manager.js create <migration_name>

# Apply pending migrations
node scripts/schema-manager.js apply

# Apply with verbose output
node scripts/schema-manager.js apply --verbose

# Apply to local instance
node scripts/schema-manager.js apply --local
```

### Validation & Safety
```bash
# Validate migrations before applying
node scripts/schema-manager.js validate

# Show migration history
node scripts/schema-manager.js history
```

### Type Generation
```bash
# Generate TypeScript types from current schema
node scripts/schema-manager.js types
```

### Environment Management
```bash
# Switch to development environment
node scripts/schema-manager.js env development

# Switch to staging environment
node scripts/schema-manager.js env staging

# Switch to production environment
node scripts/schema-manager.js env production
```

### Rollback Operations
```bash
# Show available migrations for rollback
node scripts/schema-manager.js rollback

# Rollback to specific migration
node scripts/schema-manager.js rollback <migration_name>
```

### CI/CD Setup
```bash
# Setup GitHub Actions workflow
node scripts/schema-manager.js ci-setup
```

## 🔒 Safety Features

### Migration Validation
- **Dangerous Operation Detection** - Warns about DROP, TRUNCATE operations
- **Schema Version Tracking** - Ensures migrations are properly tracked
- **Checksum Validation** - Verifies migration integrity
- **Rollback SQL Documentation** - Encourages rollback planning

### Environment Protection
- **Environment-Specific Configurations** - Separate configs for dev/staging/prod
- **Service Role Policies** - Proper RLS policies for tracking tables
- **Migration History** - Complete audit trail of schema changes

## 📝 Migration Template

Each migration includes:
- **Migration Header** - Name, timestamp, environment
- **Schema Version Tracking** - Automatic version insertion
- **Migration History** - Tracking for rollback purposes
- **Rollback Documentation** - Comments for rollback SQL

Example migration:
```sql
-- Migration: add_property_listings_table
-- Created: 2025-01-15T10:30:00.000Z
-- Environment: development

CREATE TABLE IF NOT EXISTS public.property_listings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    address TEXT NOT NULL,
    price DECIMAL(12,2),
    bedrooms INTEGER,
    bathrooms DECIMAL(3,1),
    square_feet INTEGER,
    listing_status TEXT DEFAULT 'active'
);

-- Add rollback SQL in comments for reference:
-- ROLLBACK:
-- DROP TABLE IF EXISTS public.property_listings;

-- Update schema version
INSERT INTO public.schema_versions (version, description, checksum) 
VALUES ('2025-01-15T10:30:00_add_property_listings_table', 'add_property_listings_table', 
        encode(digest('2025-01-15T10:30:00_add_property_listings_table', 'sha256'), 'hex'))
ON CONFLICT (version) DO NOTHING;

-- Track migration
INSERT INTO public.migration_history (migration_name, rollback_sql, checksum)
VALUES ('2025-01-15T10:30:00_add_property_listings_table', 'DROP TABLE IF EXISTS public.property_listings;', 
        encode(digest('2025-01-15T10:30:00_add_property_listings_table', 'sha256'), 'hex'))
ON CONFLICT (migration_name) DO NOTHING;
```

## 🔄 CI/CD Integration

The script automatically creates a GitHub Actions workflow that:
- **Validates migrations** on pull requests
- **Generates types** after successful migrations
- **Runs on migration file changes**
- **Supports multiple environments**

## 🌍 Environment Variables

Set these environment variables for different environments:

```bash
# Development
SUPABASE_URL_DEV=your_dev_url
SUPABASE_ANON_KEY_DEV=your_dev_key

# Staging
SUPABASE_URL_STAGING=your_staging_url
SUPABASE_ANON_KEY_STAGING=your_staging_key

# Production
SUPABASE_URL_PROD=your_prod_url
SUPABASE_ANON_KEY_PROD=your_prod_key
```

## 📊 Schema Version Tracking

The system automatically tracks:
- **Schema versions** with descriptions and checksums
- **Migration history** with rollback SQL
- **Applied timestamps** for audit trails
- **Checksums** for integrity verification

## 🚨 Best Practices

### Migration Safety
1. **Always test migrations locally** before applying to production
2. **Include rollback SQL** in migration comments
3. **Use IF EXISTS/IF NOT EXISTS** for safer operations
4. **Validate migrations** before applying
5. **Keep migrations small and focused**

### Environment Management
1. **Use environment-specific configurations**
2. **Never apply untested migrations to production**
3. **Maintain separate databases for each environment**
4. **Use service role keys for schema operations**

### Version Control
1. **Commit migration files** to version control
2. **Review migrations** in pull requests
3. **Use descriptive migration names**
4. **Document breaking changes**

## 🔧 Troubleshooting

### Common Issues

**Migration fails to apply:**
```bash
# Check migration syntax
node scripts/schema-manager.js validate

# Apply with verbose output
node scripts/schema-manager.js apply --verbose
```

**Types not generating:**
```bash
# Ensure Supabase CLI is installed
supabase --version

# Generate types manually
node scripts/schema-manager.js types
```

**Environment switching issues:**
```bash
# Check environment variables
echo $SUPABASE_URL

# Switch environment explicitly
node scripts/schema-manager.js env development
```

## 📚 Advanced Usage

### Custom Migration Templates
Create custom migration templates by modifying the `createMigration` method in the script.

### Integration with Existing Workflows
The script can be integrated into existing CI/CD pipelines by calling specific commands:

```yaml
# In your CI/CD pipeline
- name: Validate Schema
  run: node scripts/schema-manager.js validate

- name: Apply Migrations
  run: node scripts/schema-manager.js apply
```

### Custom Validation Rules
Extend the validation by modifying the `validateMigrations` method to include project-specific checks.

---

**Built with ❤️ for modern Supabase development in 2025**
