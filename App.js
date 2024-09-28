function reload() {
    window.location.reload();
  }
  
  let studentForm = document.getElementById("Student-Form");
  
  document.addEventListener("DOMContentLoaded", function () {
    // Only needed for the current page if it has table data
  });
  
  if (studentForm) {
    studentForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const studentData = {
        firstname: document.getElementById("firstname").value,
        lastname: document.getElementById("lastname").value,
        studentId: document.getElementById("studentId").value,
        course: document.getElementById("course").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
      };
      console.log(studentData);
  
      saveStudentData(studentData);
      alert("Student Added Successfully!");
      studentForm.reset();
    });
  }
  
  function saveStudentData(student) {
    const savedStudents = JSON.parse(localStorage.getItem("students")) || [];
    savedStudents.push(student);
    try {
      localStorage.setItem("students", JSON.stringify(savedStudents));
    } catch (error) {
      console.error("Error saving student data", error);
    }

  }
  
  document
    .getElementById("studentDataSaved")
    .addEventListener("click", function () {
      window.location.href = "./indexFrom.html";
    });
  