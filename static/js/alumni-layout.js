document.addEventListener("DOMContentLoaded", function () {
  const peopleSection = document.querySelector("#section-people .people-widget");
  if (!peopleSection) {
    return;
  }

  const headers = Array.from(peopleSection.querySelectorAll(":scope > .col-md-12 > h2.mb-4"));
  const alumniHeading = headers.find(function (heading) {
    return heading.textContent && heading.textContent.trim().toLowerCase() === "alumni";
  });

  if (!alumniHeading) {
    return;
  }

  const alumniHeaderContainer = alumniHeading.closest(".col-md-12");
  if (!alumniHeaderContainer) {
    return;
  }

  const alumniCards = [];
  let sibling = alumniHeaderContainer.nextElementSibling;

  while (sibling) {
    if (sibling.classList.contains("col-md-12")) {
      break;
    }

    if (sibling.classList.contains("people-person")) {
      alumniCards.push(sibling);
    }

    sibling = sibling.nextElementSibling;
  }

  if (!alumniCards.length) {
    return;
  }

  const twoColumnWrapper = document.createElement("div");
  twoColumnWrapper.className = "col-12 alumni-two-column";

  const leftColumn = document.createElement("section");
  leftColumn.className = "alumni-column";
  leftColumn.innerHTML = "<div class=\"alumni-list\"></div>";

  const rightColumn = document.createElement("section");
  rightColumn.className = "alumni-column";
  rightColumn.innerHTML = "<div class=\"alumni-list\"></div>";

  const leftList = leftColumn.querySelector(".alumni-list");
  const rightList = rightColumn.querySelector(".alumni-list");

  const leftBuckets = {
    postdoc: [],
    staff: [],
    phd: []
  };

  const rightBuckets = {
    masters: [],
    summer: [],
    other: []
  };

  const placeholderImageSignatures = [
    "avatar_hue314b1d25bb69c0a75bd36abce089615_9739"
  ];

  alumniCards.forEach(function (card) {
    card.classList.remove("col-12", "col-sm-auto");
    card.classList.add("alumni-person");

    const roleNode = card.querySelector(".portrait-title h3");
    const role = roleNode ? roleNode.textContent.toLowerCase() : "";
    let hasActualAvatar = false;

    const avatar = card.querySelector("img.avatar");
    if (avatar) {
      const src = avatar.getAttribute("src") || "";
      const isPlaceholder = placeholderImageSignatures.some(function (pattern) {
        return src.indexOf(pattern) !== -1;
      });

      if (isPlaceholder) {
        const avatarLink = avatar.closest("a");
        if (avatarLink) {
          avatarLink.remove();
        } else {
          avatar.remove();
        }

        card.classList.add("alumni-person-no-avatar");
      } else {
        hasActualAvatar = true;
      }
    } else {
      card.classList.add("alumni-person-no-avatar");
    }

    const cardRecord = {
      card: card,
      hasAvatar: hasActualAvatar
    };

    const nameNode = card.querySelector(".portrait-title h2");
    const personName = nameNode ? nameNode.textContent.trim() : "";

    if (personName === "Jin Yang") {
      leftBuckets.phd.push(cardRecord);
      return;
    }

    if (role.indexOf("post doc") !== -1 || role.indexOf("postdoc") !== -1) {
      leftBuckets.postdoc.push(cardRecord);
      return;
    }

    if (role.indexOf("staff") !== -1 || personName === "Deydeep Kothapalli") {
      leftBuckets.staff.push(cardRecord);
      return;
    }

    if (role.indexOf("phd") !== -1) {
      leftBuckets.phd.push(cardRecord);
      return;
    }

    if (role.indexOf("msc") !== -1 || role.indexOf("master") !== -1 || role.indexOf("graduate student") !== -1) {
      rightBuckets.masters.push(cardRecord);
      return;
    }

    if (role.indexOf("summer intern") !== -1) {
      rightBuckets.summer.push(cardRecord);
      return;
    }

    rightBuckets.other.push(cardRecord);
  });

  const sortPhotoFirst = function (cards) {
    cards.sort(function (a, b) {
      return Number(b.hasAvatar) - Number(a.hasAvatar);
    });

    return cards;
  };

  const appendGroup = function (targetList, label, cards) {
    if (!cards.length) {
      return;
    }

    const subgroupTitle = document.createElement("h4");
    subgroupTitle.className = "alumni-subgroup-title";
    subgroupTitle.textContent = label;
    targetList.appendChild(subgroupTitle);

    cards.forEach(function (entry) {
      targetList.appendChild(entry.card);
    });
  };

  appendGroup(leftList, "Post Docs", sortPhotoFirst(leftBuckets.postdoc));
  appendGroup(leftList, "Staff", sortPhotoFirst(leftBuckets.staff));
  appendGroup(leftList, "PhD Students", sortPhotoFirst(leftBuckets.phd));

  appendGroup(rightList, "Masters Students", sortPhotoFirst(rightBuckets.masters));
  appendGroup(rightList, "Summer Interns", sortPhotoFirst(rightBuckets.summer));
  appendGroup(rightList, "Other Alumni", sortPhotoFirst(rightBuckets.other));

  twoColumnWrapper.appendChild(leftColumn);
  twoColumnWrapper.appendChild(rightColumn);

  peopleSection.insertBefore(twoColumnWrapper, alumniHeaderContainer.nextElementSibling);
});
