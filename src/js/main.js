document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    try {
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    } catch (e) {
      console.error("Can't find element", e);
    }
  });
});

$("#modal__cross").on("click", function (e) {
  e.preventDefault();
  $("#modal__wrapper").fadeOut();
});

$("#getModal").on("click", function (e) {
  e.preventDefault();
  $("#modal__wrapper").css("display", "flex");
});

const headerHeight = $("header").height();

const header = $("header");

var lastScrollTop = 0;

$(window).scroll(function (event) {
  var currentWidth = $(window).width();

  if ($(window).scrollTop() > header.parent().height()) {
    if (!$("#header_clone").length && $(window).width() > 768) {
      $(
        '<div id="header_clone" style="height: ' + headerHeight + 'px"></div>'
      ).appendTo(header.parent());
    }
    header.addClass("header__scroll");
    if (currentWidth > 768) {
      $(".burger__wrapper-top ul li.nav_items img").attr(
        "src",
        header.data("arrow-dark")
      );
    }

    header
      .children("nav")
      .children("ul")
      .children("li")
      .addClass("heading-arrow");
    $(".contact-us .social-list").fadeIn(500, () => {
      $(".contact-us .social-list").addClass("scrolled");
    });
  } else {
    header.removeClass("header__scroll");
    $(".burger__wrapper-top ul li.nav_items img").attr(
      "src",
      header.data("arrow")
    );
    header
      .children("nav")
      .children("ul")
      .children("li")
      .removeClass("heading-arrow");
    $(".contact-us .social-list").fadeIn(500, () => {
      $(".contact-us .social-list").removeClass("scrolled");
    });
    if ($("#header_clone").length && $(window).width() > 768) {
      $("#header_clone").remove();
    }
  }

  if ($(window).scrollTop() > $("footer").offset().top) {
    $(".contact-us .social-list").fadeIn(500, () => {
      $(".contact-us .social-list").removeClass("scrolled");
    });
  }
});

function burgerClickHandler(e) {
  e.preventDefault();
  $(".burger__wrapper").css("transform", "translate(0)");
  $("#burger").off("click");
}

if ($(window).width() < 768) {
  $("#burger").on("click", function (e) {
    burgerClickHandler(e);
  });
}

$(window).on("resize", function () {
  if ($(window).width() < 768) {
    $("#burger").on("click", function (e) {
      e.preventDefault();
      $(".burger__wrapper").css("transform", "translate(0)");
    });
  } else {
    $("#burger").off("click");
  }
});

$("#cross").on("click", function (e) {
  e.preventDefault();
  $(".burger__wrapper").css("transform", "translate(100%)");
  e.stopPropagation();
  $("#burger").on("click", function (e) {
    burgerClickHandler(e);
  });
});

$("#consultation_phone").inputmask({ mask: "(+380) 99-999-99-99" });
$("#consultation_phone-modal").inputmask({ mask: "(+380) 99-999-99-99" });

var errors = {
  name: ["name", "description"],
  phone: ["phone", "description"],
};

var error_message = $(".error_message");

function sendForm(type = "") {
  type == "footer" ? (type = "") : (type = "-modal");

  var data = {
    name: $("#consultation_name" + type).val(),
    phone: $("#consultation_phone" + type).val(),
  };

  if (!data.name) {
    var target = $("#consultation_name" + type).siblings("div.error_message");
    target.addClass("opacity1");
    setTimeout(function () {
      target.removeClass("opacity1");
    }, 3000);
    return;
  }

  if (!data.phone) {
    var target = $("#consultation_phone" + type).siblings("div.error_message");
    target.addClass("opacity1");
    setTimeout(function () {
      target.removeClass("opacity1");
    }, 3000);
    return;
  }

  $.ajax({
    method: "POST",
    url: $(this).attr("action"),
    data: data,
  }).done(function (response) {
    if (type) {
      $(this).children().hide();
    } else {
      $(this).parent().children().hide();
    }

    if (response.success == false) {
      $("#error" + type + " h3").text(response.message);
      $("#success" + type)
        .parent()
        .append('<p class="main-body">' + response.errors.name + "</p>");
      $("#success" + type)
        .parent()
        .append('<p class="main-body">' + response.errors.phone + "</p>");
      $("#error" + type).show();
    } else {
      $("#success" + type + " h3").text(response.message);
      $("#success" + type).show();
    }
  });
}

$("form").each(function () {
  $(this).on("submit", function (e) {
    e.preventDefault();

    sendForm.call($(this), $(this).data("form"));
  });
});
