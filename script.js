function submitForm(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    var formData = {
        enquiryFor: document.getElementById('enquiryFor').value,
        studentName: document.getElementById('studentName').value,
        address: document.getElementById('address').value,
        contactNumber: document.getElementById('contactNumber').value,
        parentMobile: document.getElementById('parentMobile').value,
        category: document.getElementById('category').value,
        dob: document.getElementById('dob').value,
        physics: document.getElementById('physics').value,
        chemistry: document.getElementById('chemistry').value,
        biology: document.getElementById('biology').value,
        maths: document.getElementById('maths').value,
        pcmPcb: document.getElementById('pcmPcb').value,
        aggregateHsc: document.getElementById('aggregateHsc').value,
        ugMarks: document.getElementById('ugMarks').value,
        branchPreferred: document.getElementById('branchPreferred').value,
        documents: document.getElementById('documents').value,
        cetName: document.getElementById('cetName').value,
        rollNo: document.getElementById('rollNo').value,
        marksObtained: document.getElementById('marksObtained').value
    };

    // Create a new workbook and worksheet
    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.json_to_sheet([formData]);

    // Append the worksheet to the workbook
    XLSX.utils.book_append_sheet(wb, ws, "Admission Enquiry");

    // Create the Excel file and trigger the download
    XLSX.writeFile(wb, "Admission_Enquiry.xlsx");

    alert('Form submitted successfully!');
}

// Attach the submit event to the form
document.getElementById('enquiryForm').addEventListener('submit', submitForm);