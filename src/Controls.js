import "./Controls.css";

/**
 * @param {object} params
 * @param {string} params.type
 * @param {(v: string) => void} params.setType
 * @param {string} params.theme
 * @param {(v: string) => void} params.setTheme
 */
export default function Controls({ type, setType, theme, setTheme }) {
  return (
    <form>
      <h2>Type</h2>

      <div className="radio-group">
        <input type="radio" name="type" value="analogue" id="type-analogue" checked={type === "analogue"} onChange={e => setType(e.target.value)} />
        <label htmlFor="type-analogue">Analogue</label>

        <input type="radio" name="type" value="digital" id="type-digital" checked={type === "digital"} onChange={e => setType(e.target.value)} />
        <label htmlFor="type-digital">Digital</label>
      </div>

      <h2>Theme</h2>

      <div className="radio-group">
        <input type="radio" name="theme" value="light" id="theme-light" checked={theme === "light"} onChange={e => setTheme(e.target.value)} />
        <label htmlFor="theme-light">Light</label>

        <input type="radio" name="theme" value="dark" id="theme-dark" checked={theme === "dark"} onChange={e => setTheme(e.target.value)} />
        <label htmlFor="theme-dark">Dark</label>
      </div>
    </form >
  );
}