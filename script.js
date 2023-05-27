async function fetchData() {
    const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false';

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      // Get a reference to the table body
      const tableBody = document.querySelector('#coinTable tbody');

      // Loop through the data and create table rows
      data.forEach(coin => {
        const row = document.createElement('tr');

        // Create table cells and populate with data
        const rankCell = document.createElement('td');
        rankCell.textContent = coin.market_cap_rank;
        row.appendChild(rankCell);

        const nameCell = document.createElement('td');
        nameCell.textContent = coin.name;
        row.appendChild(nameCell);

        const symbolCell = document.createElement('td');
        symbolCell.textContent = coin.symbol;
        row.appendChild(symbolCell);

        const priceCell = document.createElement('td');
        priceCell.textContent = coin.current_price;
        row.appendChild(priceCell);

        const marketCapCell = document.createElement('td');
        marketCapCell.textContent = coin.market_cap;
        row.appendChild(marketCapCell);

        // Append the row to the table body
        tableBody.appendChild(row);
      });
    } catch (error) {
      console.log('Error:', error);
    }
  }

  fetchData();