# Contributing to the ICD Foundation Website

We welcome contributions to the Industry Commons for Defense Foundation website. This document provides guidelines for contributing to the project.

## Code of Conduct

This project adheres to the Contributor Covenant Code of Conduct. By participating, you are expected to uphold this code. Please read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for details.

## How to Contribute

### Reporting Issues

Before creating bug reports, please check the existing issues to avoid duplicates. When creating a bug report, please include:

- **Clear description** of the issue
- **Steps to reproduce** the behavior
- **Expected behavior**
- **Actual behavior**
- **Screenshots** if applicable
- **Environment details** (browser, operating system, etc.)

### Suggesting Enhancements

Enhancement suggestions are welcome. Please provide:

- **Clear description** of the enhancement
- **Use case** explaining why this would be useful
- **Implementation details** if you have ideas

### Pull Requests

1. **Fork** the repository
2. **Create** a feature branch from `main`
3. **Make** your changes
4. **Test** your changes thoroughly
5. **Commit** your changes with clear, descriptive messages
6. **Push** to your fork
7. **Submit** a pull request

#### Pull Request Guidelines

- Follow the existing code style and conventions
- Include tests for new functionality
- Update documentation as needed
- Ensure all tests pass
- Keep pull requests focused and atomic

## Development Guidelines

### Prerequisites

- Node.js 20 or higher
- npm package manager
- Git

### Setup

1. Clone your fork:
   ```bash
   git clone https://github.com/YOUR-USERNAME/icd-website.git
   cd icd-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

### Code Style

- Use TypeScript for all new code
- Follow the existing component structure and naming conventions
- Use Tailwind CSS classes for styling
- Maintain responsive design principles
- Ensure accessibility compliance

### Testing

- Test changes across different browsers
- Verify responsive design on various screen sizes
- Check for accessibility compliance
- Validate that the build process completes successfully

### Commit Messages

Use clear, descriptive commit messages:

```
type(scope): brief description

Longer description if necessary, explaining what and why,
not how.
```

Types:
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Formatting changes
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

### Content Guidelines

When contributing content:

- Maintain professional tone appropriate for defense industry
- Ensure accuracy of technical information
- Follow established information architecture
- Use clear, concise language
- Include proper attribution for external sources

### Design Guidelines

- Follow the established design system and color palette
- Maintain consistency with existing components
- Ensure accessibility standards are met
- Test across different devices and browsers
- Optimize images and assets for web delivery

## Review Process

1. **Initial Review**: Maintainers will review the pull request for:
   - Code quality and adherence to guidelines
   - Functionality and testing
   - Documentation updates

2. **Security Review**: Changes affecting security or sensitive information require additional review

3. **Content Review**: Content changes may require review by subject matter experts

4. **Final Approval**: At least one maintainer approval is required before merging

## Recognition

Contributors will be acknowledged in:
- GitHub contributor list
- Project documentation (when appropriate)
- Release notes for significant contributions

## Questions?

If you have questions about contributing:

- Check existing issues and documentation
- Reach out via GitHub issues
- Contact the maintainers at contact@icd-defense.org

## License Agreement

By contributing to this project, you agree that your contributions will be licensed under the SW-ICD License v1.0.

Thank you for contributing to the Industry Commons for Defense Foundation website!