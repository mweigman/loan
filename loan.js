$(document).ready(function () {

    var myRules =
        {
            salary: {
                required: true,
                min: 1,
                max: 999999,
                digits: true
            },
            creditScore: {
                required: true,
                min: 300,
                max: 850,
                digits: true
            },
            months: {
                required: true,
                min: 1,
                max: 600,
                digits: true
            }
        };

    var myMessages =
        {
            salary: {
                required: "Salary Required",
                min: "Enter a valid number",
                max: "Enter a valid number",
                digits: "Enter a valid number"
            },
            creditScore: {
                required: "Credit Score Required",
                min: "Enter a valid number",
                max: "Enter a valid number",
                digits: "Enter a valid number"
            },
            months: {
                required: "The months worked at current job is required",
                min: "Enter a valid number",
                max: "Enter a valid number",
                digits: "Enter a valid number"
            }
        };

    $("form").validate({
        submitHandler: loanApproval,
        rules: myRules,
        messages: myMessages
    });

    function loanApproval() {
        var salary = $("#salary").val();
        var creditScore = $("#creditScore").val();
        var months = $("#months").val();

        if ((salary <= 40000) && (creditScore >= 600) && (months > 12)) {
            $("#output").text("Loan is approved")
        } else if ((salary >= 40000) && (creditScore >= 600) && (months > 12)) {
            $("#output").text("Loan is approved")
        } else if ((salary >= 40000) && (creditScore >= 1) && (months > 12)) {
            $("#output").text("Loan is approved")
        } else if ((salary >= 40000) && (creditScore >= 600) && (months > 1)) {
            $("#output").text("Loan is approved")
        } else {
            $("#output").text("We regret to inform you that your loan is denied")
        }

    }

});
