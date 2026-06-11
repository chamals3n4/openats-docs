import React from "react";
import Link from "@docusaurus/Link";
import { HugeiconsIcon } from "@hugeicons/react";
import { File02Icon, FolderLibraryIcon } from "@hugeicons/core-free-icons";

function getCardHref(item) {
  return item.href ?? item.permalink ?? item.link?.href ?? item.link?.permalink ?? "#";
}

function getCardDescription(item) {
  return item.description ?? item.customProps?.description ?? item.doc?.description;
}

export default function DocCard({ item }) {
  const isCategory = item.type === "category";
  const Icon = isCategory ? FolderLibraryIcon : File02Icon;
  const description = getCardDescription(item);

  return (
    <Link className="openats-doc-card" to={getCardHref(item)}>
      <span className="openats-doc-card__icon" aria-hidden="true">
        <HugeiconsIcon
          icon={Icon}
          size={28}
          color="currentColor"
          strokeWidth={1.7}
        />
      </span>
      <span className="openats-doc-card__title">{item.label}</span>
      {description ? (
        <span className="openats-doc-card__description">{description}</span>
      ) : null}
    </Link>
  );
}
