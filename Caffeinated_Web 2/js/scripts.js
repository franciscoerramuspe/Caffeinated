/*!
* Start Bootstrap - Freelancer v7.0.6 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
<<<<<<< Updated upstream:Caffeinated_Web 2/js/scripts.js
=======

function makeTableScroll() {
    // Constant retrieved from server-side via JSP
    var maxRows = 4;

    var table = document.getElementById('myTable');
    var wrapper = table.parentNode;
    var rowsInTable = table.rows.length;
    var height = 0;
    if (rowsInTable > maxRows) {
        for (var i = 0; i < maxRows; i++) {
            height += table.rows[i].clientHeight;
        }
        wrapper.style.height = height + "px";
    }
}


function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }


// This object stores content for insertCol() to fill a table
let content = {
    cap: {
      text: 'TEXT',
      side: 'Add',
      act: 0 // 1='use data' 0='skip data'
    },
    tH: {
      th: 'tH',
      act: 0
    },
    tB: {
      th: '',
      td: `<td><button class="btn btn-sm btn-info add">➕</button></td>`,
      act: 1
    },
    tF: {
      td: 'tF',
      act: 0
    }
  };
  
  /**
   * @desc - Inserts a column into a given table
   * @param {number} index - Index to inert new column at
   * @param {object} content - Object that stores content
   * @param {string<selector>} selector - CSS Selector of a 
   *        tag if undefined @default is "table"
   */
  function insertCol(index, content, selector = 'table') {
    // Reference <table>
    const table = document.querySelector(selector);
    // Collect all <tr> into an array
    const rowArray = [...table.rows];
    let cols = rowArray[0].cells.length;
    let size = rowArray.length;
    //console.log(size);
    //console.log(cols);
  
    /*
    If content.tB is active (1)...
    ... .foreach() <tr> add <td> and content at the index
    */
    if (content.tB.act) {
      rowArray.forEach(tr => {
        tr.insertCell(index).innerHTML = content.tB.td;
      });
    }
    /*
    If there's a <thead> AND content.tH.act === 1...
    ... .removeCell() at index...
    ... add <th> with content
    */
    if (table.tHead && content.tH.act) {
      rowArray[0].deleteCell(index);
      rowArray[0].insertCell(index).outerHTML = `<th>${content.tH.th}</th>`;
    }
    // The same as above for <tfoot>
    if (table.tFoot && content.tF.act) {
      rowArray[size - 1].deleteCell(index);
      rowArray[size - 1].insertCell(index).innerHTML = content.tF.td;
    }
    // This block is for <caption>
    if (table.caption && content.cap.act) {
      table.caption.innerHTML = content.cap.text;
      table.caption.style.captionSide = content.cap.side;
    }
  }
  
  // -1 is the index after the last index
  insertCol(-1, content);
  


// $(document).ready(function () {
// // Add Columns
// var myform = $('#myTable'),
// iter = 0;
// $('#btnAddCol').click(function () {
//   myform.find('tr').each(function(){
//     var trow = $(this);
//     if(trow.index() === 0){
//       trow.append('<td>Col'+iter+'</td>');
//     }else{
//       trow.append('<td><input type="checkbox" name="cb'+iter+'"/></td>');
//     }
//   });
//   iter += 1;
// });
// }); 

// const addColumn = () => {
//     for (const [i, row] of [...document.querySelectorAll('#myTable tr')].entries()) {
//       const input = document.createElement("input")
//       input.setAttribute('type', 'text')
//       const cell = document.createElement(i ? "td" : "th")
//       cell.appendChild(input)
//       row.appendChild(cell)
//     };
//   }
  
//   document.querySelector('button').onclick = addColumn
  

// function insertInTable(myTable) {
//     var table = document.getElementById("myTable");
//     let tableRef = document.getElementById(myTable);
//     var totalRows = table.rows.length;
  
//   // Insert a cell in the row at index 0
//     let newCell = newRow.insertCell(-1);
//     for (let i = 0; i < totalRows; i++ ){
//         // Append a text node to the cell
//         let newText = document.createTextNode('New bottom row');
//         // Insert a row at the end of the table
//         let newRow = tableRef.insertRow(0);

//         newCell.appendChild(newText);
//     }
  
    
// }
// insertInTable('myTable');
// d3.text("drinksTableAddButton.csv", function(data) {
//     var parsedCSV = d3.csv.parseRows(data);

//     var container = d3.select("body")
//         .append("table")

//         .selectAll("tr")
//             .data(parsedCSV).enter()
//             .append("tr")

//         .selectAll("td")
//             .data(function(d) { return d; }).enter()
//             .append("td")
//             .text(function(d) { return d; });
// });
>>>>>>> Stashed changes:Caffeinated_Web/js/scripts.js
