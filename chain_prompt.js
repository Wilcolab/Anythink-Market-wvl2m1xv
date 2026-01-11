function toKebabCase(str) {
    // Normalize the input
    str = str.trim().toLowerCase();

    // Split words from camelCase, PascalCase, spaces, and underscores
    const words = str
        .replace(/([a-z])([A-Z])/g, '$1 $2') // camelCase and PascalCase
        .replace(/[\s_]+/g, ' ') // spaces and underscores
        .split(' ');

    // Replace all spaces, underscores, and any non-alphanumeric characters with hyphens
    const kebabCase = words.join('-')
        .replace(/[^a-z0-9-]+/g, '-') // non-alphanumeric characters
        .replace(/-+/g, '-') // consecutive hyphens
        .replace(/^-|-$/g, ''); // leading/trailing hyphens

    return kebabCase;
}