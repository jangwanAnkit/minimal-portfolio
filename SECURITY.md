# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it privately.

**Do not** open a public issue or disclose the vulnerability publicly.

### How to Report

Please send an email to the project maintainer with:
- A description of the vulnerability
- Steps to reproduce the issue
- Any potential impact

The maintainer will acknowledge receipt of your report within 48 hours and provide regular updates on the progress.

## Security Best Practices

When working with this project:

1. **Never commit `.env` files** - Always use `.env.example` as a template
2. **Keep dependencies updated** - Regularly run `npm audit` or `pnpm audit`
3. **Review changes** - Be cautious when pulling from forks or external sources
4. **Environment variables** - Ensure all sensitive data is stored in environment variables

## Supported Versions

| Version | Security Updates |
|---------|------------------|
| Current | ✅ Supported |

## Security Alerts

This repository is configured to receive Dependabot alerts and GitHub security advisories.

Thank you for helping keep this project secure!