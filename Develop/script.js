$(function () {
  const currentHour = dayjs().hour();

  $(".saveBtn").on("click", function (event) {
    const timeBlock = $(this).closest(".time-block");
    const id = timeBlock.attr("id");
    const description = timeBlock.find(".description").val();

    localStorage.setItem(id, description);
  });

  $(".time-block").each(function () {
    const id = $(this).attr("id");
    const savedDescription = localStorage.getItem(id);
    if (savedDescription) {
      $(this).find(".description").val(savedDescription);
    }

    const hour = parseInt(id.split("-")[1]);

    if (hour < currentHour) {
      $(this).addClass("past").removeClass("present future");
    } else if (hour === currentHour) {
      $(this).addClass("present").removeClass("past future");
    } else {
      $(this).addClass("future").removeClass("past present");
    }

    function currentDay() {
      var now = dayjs().format("MMMM D, YYYY");
      $("#currentDay").text(now);
    }
    currentDay();
  });
});
