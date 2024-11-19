module.exports = {
  "*.jsx": ["eslint --fix", "prettier --write"],
  "*.tsx": ["eslint --fix", "prettier --write", "tsc --noEmit"],
  "*.js": ["eslint --fix", "prettier --write"],
  "*.ts": ["eslint --fix", "prettier --write", "tsc --noEmit"],
  "*.json": ["prettier --write"],
  "*.css": ["prettier --write"],
};
