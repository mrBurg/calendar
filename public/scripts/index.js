function ready() {
  const container = $('#container');
  const buttonHolder = $('#button-holder')[0].content.cloneNode(true);
  const calendarHolder = $('#calendar-holder')[0].content.cloneNode(true);

  const getButton = $('#get-button', buttonHolder);
  const saveButton = $('#save-button', calendarHolder);
  const reloadButton = $('#reload-button', calendarHolder);

  getButton.click(() =>
    $.get('/api/get-date', (data) => {
      container.empty().append(calendarHolder);

      $('#calendar')
        .datepicker()
        .datepicker('setDate', new Date(Number(data)));
    })
  );

  saveButton.click(() => {
    const currentDate = $('#calendar').datepicker('getDate');

    $.post('/api/save-date', { date: currentDate.getTime() });
  });

  reloadButton.click(() => window.location.reload());
  container.append(buttonHolder);
}

document.addEventListener('DOMContentLoaded', ready);
