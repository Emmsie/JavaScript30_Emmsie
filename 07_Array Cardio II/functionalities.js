    // Array Cardio II
    // Given data
    
    const people = [
        { name: 'Wes', year: 1988 },
        { name: 'Kait', year: 1986 },
        { name: 'Irv', year: 1970 },
        { name: 'Lux', year: 2015 }
      ];
  
      const comments = [
        { text: 'Love this!', id: 523423 },
        { text: 'Super good', id: 823423 },
        { text: 'You are the best', id: 2039842 },
        { text: 'Ramen is my fav food ever', id: 123523 },
        { text: 'Nice Nice Nice!', id: 542328 }
      ];
  
      // Some and Every Checks
      // Array.prototype.some() // is at least one person adult?
      const currentYear = new Date().getFullYear();
      const isAnyPersonAdult = people.some(person => currentYear - person.year >=19);
      console.log({isAnyPersonAdult});

      // Array.prototype.every() // is everyone adult?
      const isEveryPersonAdult = people.every(person => currentYear - person.year >=19);
      console.log({isEveryPersonAdult});
  
      // Array.prototype.find()
      // find is like filter, but instead returns just one
      // find the comment with the ID of 823423
      const commentID823423 = comments.find(comment => comment.id == 823423);
      console.log(commentID823423.text);
  
      // Array.prototype.findIndex()
      // Find the comment with this ID
      // delete the comment with the ID of 823423
      const index = comments.findIndex(comment => comment.id === 823423);
      //console.log(index);
      // comments.splice(index, 1); // delete item from array
      const newComments = [ // or create a new array and spread in the values you want to keep
        ...comments.slice(0, index),
        ...comments.slice(index + 1)
      ];
      console.table(newComments);