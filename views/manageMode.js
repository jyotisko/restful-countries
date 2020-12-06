class ManageMode {
  _btn = document.querySelector('.mode');

  manageChangeMode() {
    this._btn.addEventListener('click', e => {
      const btn = e.target.closest('svg');
      btn.dataset.light == 'true' ? btn.dataset.light = false : btn.dataset.light = true;
      const lightMode = btn.dataset.light;

      const root = document.querySelector(':root');
      const styles = getComputedStyle(root);

      const titleColor = '--title-color';
      const mainBackgroundColor = '--main-background-color';
      const shadowColor = '--shadow-color';
      const descriptionColor = '--color-description';
      const colorLight = '--color-light';

      if (lightMode == 'false') {
        root.style.setProperty(titleColor, '#ffffff');
        root.style.setProperty(mainBackgroundColor, 'hsl(207, 26%, 17%)');
        root.style.setProperty(shadowColor, 'rgba(0, 0, 0, 0.1)');
        root.style.setProperty(descriptionColor, 'rgba(255, 255, 255, 0.6)');
        root.style.setProperty(colorLight, 'hsl(209, 23%, 22%)');
      } else {
        root.style.setProperty(titleColor, '#000');
        root.style.setProperty(mainBackgroundColor, '#fff');
        root.style.setProperty(shadowColor, 'rgba(0, 0, 0, 0.1)');
        root.style.setProperty(descriptionColor, 'rgba(0, 0, 0, 0.6)');
        root.style.setProperty(colorLight, '#fff');
      }
    });
  }
}

export default new ManageMode();
