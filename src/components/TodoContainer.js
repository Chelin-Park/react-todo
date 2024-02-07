fetch('https://api.airtable.com/v1/myTable/myListItems?view=Grid%20view')
  .then(response => response.json())
  .then(data => {
    // Handle the fetched data
  })
  .catch(error => {
    // Handle any errors
  });
  fetch('https://api.airtable.com/v1/myTable/myListItems?view=Grid%20view&sort[0][field]=Title&sort[0][direction]=asc')
  .then(response => response.json())
  .then(data => {
    // Handle the fetched data
  })
  .catch(error => {
    // Handle any errors
  });

  .sort((objectA, objectB) => {
    // Custom callback function for sorting
  })
  .sort((objectA, objectB) => {
    const titleA = objectA.fields.Title.toUpperCase();
    const titleB = objectB.fields.Title.toUpperCase();
  
    if (titleA < titleB) {
      return 1; // Return 1 for descending order
    }
    if (titleA > titleB) {
      return -1; // Return -1 for descending order
    }
    return 0;
  })
  const [sortDirection, setSortDirection] = useState('asc'); // Initial sort direction is ascending

const handleToggleSort = () => {
  setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
};
fetch(`https://api.airtable.com/v1/myTable/myListItems?view=Grid%20view&sort[0][field]=Title&sort[0][direction]=${sortDirection}`)
  .then(response => response.json())
  .then(data => {
    // Handle the fetched data
  })
  .catch(error => {
    // Handle any errors
  });
  const [sortField, setSortField] = useState('Title'); // Initial sort field is "Title"

  const handleSortFieldChange = (event) => {
    setSortField(event.target.value);
  };
  
  fetch(`https://api.airtable.com/v1/myTable/myListItems?view=Grid%20view&sort[0][field]=${sortField}&sort[0][direction]=${sortDirection}`)
    .then(response => response.json())
    .then(data => {
      // Handle the fetched data
    })
    .catch(error => {
      // Handle any errors
    });
<select value={sortField} onChange={handleSortFieldChange}>
  <option value="Title">Title</option>
  <option value="createdTime">Created Time</option>
</select>
const handleAddTask = (newTask) => {
    // Add the new task to the existing tasks
    const updatedTasks = [...tasks, newTask];
  
    // Sort the updated tasks based on the current sort field and direction
    updatedTasks.sort((taskA, taskB) => {
      const valueA = taskA[sortField];
      const valueB = taskB[sortField];
  
      if (sortDirection === 'asc') {
        if (valueA < valueB) {
          return -1;
        }
        if (valueA > valueB) {
          return 1;
        }
      } else if (sortDirection === 'desc') {
        if (valueA < valueB) {
          return 1;
        }
        if (valueA > valueB) {
          return -1;
        }
      }
  
      return 0;
    });
  
    // Update the tasks state with the sorted list
    setTasks(updatedTasks);
  };
    
  
    