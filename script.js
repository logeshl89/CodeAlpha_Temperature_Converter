function convert() {
  const input = document.getElementById('input').value;
  const from = document.getElementById('from').value;
  const to = document.getElementById('to').value;

  if (from === to) {
    document.getElementById('result').innerHTML = 'Select the correct option';
    document.getElementById('temperature-status').innerHTML = '';
    return;
  }

  if (from === 'celsius' && to === 'fahrenheit') {
    const result = (input * 9/5) + 32;
    document.getElementById('result').innerHTML = `${input}&deg;C to ${result.toFixed(2)}&deg;F`;

    if (result < 32) {
      document.getElementById('temperature-status').innerHTML = 'It is cold';
    } else if (result > 90) {
      document.getElementById('temperature-status').innerHTML = 'It is hot';
    } else {
      document.getElementById('temperature-status').innerHTML = 'It is normal';
    }
  } else if (from === 'celsius' && to === 'kelvin') {
    const result = parseFloat(input) + 273.15;
    document.getElementById('result').innerHTML = `${input}&deg;C to ${result.toFixed(2)}K`;
    document.getElementById('temperature-status').innerHTML = '';
  } else if (from === 'fahrenheit' && to === 'celsius') {
    const result = (input - 32) * 5/9;
    document.getElementById('result').innerHTML = `${input}&deg;F to ${result.toFixed(2)}&deg;C`;

    if (result < 0) {
      document.getElementById('temperature-status').innerHTML = 'It is cold';
    } else if (result > 32) {
      document.getElementById('temperature-status').innerHTML = 'It is hot';
    } else {
      document.getElementById('temperature-status').innerHTML = 'It is normal';
    }
  } else if (from === 'fahrenheit' && to === 'kelvin') {
    const result = (input - 32) * 5/9 + 273.15;
    document.getElementById('result').innerHTML = `${input}&deg;F to ${result.toFixed(2)}K`;
    document.getElementById('temperature-status').innerHTML = '';
  } else if (from === 'kelvin' && to === 'celsius') {
    const result = parseFloat(input) - 273.15;
    document.getElementById('result').innerHTML = `${input}K to ${result.toFixed(2)}&deg;C`;

    if (result < 0) {
      document.getElementById('temperature-status').innerHTML = 'It is cold';
    } else if (result > 32) {
      document.getElementById('temperature-status').innerHTML = 'It is hot';
    } else {
      document.getElementById('temperature-status').innerHTML = 'It is normal';
    }
  } else if (from === 'kelvin' && to === 'fahrenheit') {
    const result = (input - 273.15) * 9/5 + 32;
    document.getElementById('result').innerHTML = `${input}K to ${result.toFixed(2)}&deg;F`;

    if (result < 32) {
      document.getElementById('temperature-status').innerHTML = 'It is cold';
    } else if (result > 90) {
      document.getElementById('temperature-status').innerHTML = 'It is hot';
    } else {
      document.getElementById('temperature-status').innerHTML = 'It is normal';
    }
  }
}
