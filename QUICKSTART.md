# 🚀 Quick Start Guide

This guide helps you quickly start a new challenge using the provided template.

## Starting a New Challenge

### Method 1: Manual Copy (Recommended for Learning)

1. **Copy the template folder**
   ```bash
   cp -r templates/challenge-template challenges/day-XXX
   ```
   Replace `XXX` with the day number (e.g., `002`, `003`, etc.)

2. **Navigate to the new folder**
   ```bash
   cd challenges/day-XXX
   ```

3. **Update the README.md**
   - Replace `[Challenge Name]` with your challenge title
   - Update the description, learning goals, and features
   - Add your CodePen link when ready
   - Update the completion date

4. **Update index.html**
   - Replace `Day XXX` with the actual day number
   - Update the title and description meta tags
   - Add your HTML structure

5. **Add your styles in style.css**
   - Customize the CSS variables if needed
   - Add your component-specific styles

6. **Add your JavaScript in script.js**
   - Remove the placeholder code
   - Add your interactive functionality

7. **Update the main index.md**
   - Add an entry for your new challenge in the table
   - Update the progress tracker

### Method 2: Using Command Line

You can create a helper script to automate this:

```bash
#!/bin/bash
# save as create-challenge.sh in the root directory

DAY=$1
NAME=$2

if [ -z "$DAY" ] || [ -z "$NAME" ]; then
    echo "Usage: ./create-challenge.sh <day-number> <challenge-name>"
    echo "Example: ./create-challenge.sh 002 'Credit Card Form'"
    exit 1
fi

# Pad day number with zeros
DAY_PADDED=$(printf "%03d" $DAY)

# Copy template
cp -r templates/challenge-template "challenges/day-$DAY_PADDED"

echo "Created challenges/day-$DAY_PADDED"
echo "Now update the files with your challenge: $NAME"
```

## Testing Your Challenge

### Option 1: Simple HTTP Server (Python)
```bash
cd challenges/day-XXX
python3 -m http.server 8000
```
Then open: http://localhost:8000

### Option 2: Live Server (VS Code)
1. Install "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 3: Direct Browser
Simply open `index.html` in your browser (double-click the file)

## Publishing to CodePen

1. Go to [CodePen](https://codepen.io/pen/)
2. Copy the contents of your `index.html` (just the `<body>` content)
3. Paste into the HTML panel
4. Copy the contents of `style.css` into the CSS panel
5. Copy the contents of `script.js` into the JS panel
6. Click "Save" and share the URL
7. Add the CodePen URL to your challenge's README.md

## Updating the Challenge Catalog

Edit `index.md`:

```markdown
| XXX | Your Challenge Name | Brief description | [View](https://codepen.io/your-pen) | 🟢 |
```

Update the progress tracker at the bottom:
- Increment "Completed" count
- Decrement "Remaining" count
- Update "Current Streak"

## Tips

- 💡 **Keep it simple**: Focus on one UI concept per challenge
- 🎨 **Be creative**: Try different color schemes and layouts
- ♿ **Accessibility**: Use semantic HTML and ARIA labels
- 📱 **Responsive**: Test on different screen sizes
- 🚀 **Performance**: Keep assets optimized
- 📝 **Document**: Write clear comments and README sections

## Need Help?

- Check the Day 001 example for reference
- Open an issue for questions
- Review the CONTRIBUTING.md for guidelines

Happy coding! 🎉
