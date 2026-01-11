export default defineAppConfig({
  header: {
    title: "chidi odili",
  },
  docus: {
    locale: "en",
  },

  ui: {
    
    contentToc: {
      slots: {
        root: "sticky top-(--ui-header-height) z-10 bg-default/75 lg:bg-[initial] backdrop-blur -mx-4 px-4 sm:px-6 sm:-mx-6 overflow-y-auto max-h-[calc(100vh-var(--ui-header-height))]",
        container:
          "pt-4 sm:pt-6 pb-2.5 sm:pb-4.5 lg:py-8 border-b border-dashed border-default lg:border-0 flex flex-col",
        top: "",
        bottom: "hidden lg:flex lg:flex-col gap-6",
        trigger:
          "toc-title lg:pl-5.5 pl-0 group text-sm font-light flex-1 flex items-center gap-1.5 py-1.5 -mt-1.5 focus-visible:outline-primary",
        title: "truncate",
        trailing: "ms-auto inline-flex gap-1.5 items-center",
        trailingIcon:
          "size-5 transform transition-transform duration-200 shrink-0 group-data-[state=open]:rotate-180 lg:hidden",
        content:
          "data-[state=open]:animate-[collapsible-down_200ms_ease-out] data-[state=closed]:animate-[collapsible-up_200ms_ease-out] overflow-hidden focus:outline-none",
        list: "min-w-0",
        listWithChildren: "ms-3",
        item: "min-w-0",
        itemWithChildren: "",
        link: "group relative text-sm flex items-center focus-visible:outline-primary py-1",
        linkText: "truncate",
        indicator:
          "absolute ms-2.5 transition-[translate,height] duration-200 h-(--indicator-size) translate-y-(--indicator-position) w-px rounded-full",
      },
      variants: {
        color: {
          primary: "",
          secondary: "",
          success: "",
          info: "",
          warning: "",
          error: "",
          neutral: "",
        },
        highlightColor: {
          primary: {
            indicator: "bg-primary",
          },
          secondary: {
            indicator: "bg-secondary",
          },
          success: {
            indicator: "bg-success",
          },
          info: {
            indicator: "bg-info",
          },
          warning: {
            indicator: "bg-warning",
          },
          error: {
            indicator: "bg-error",
          },
          neutral: {
            indicator: "bg-inverted",
          },
        },
        active: {
          false: {
            link: ["text-muted hover:text-default", "transition-colors"],
          },
        },
        highlight: {
          true: {
            list: "ms-2.5 ps-3 border-s border-default",
            item: "-ms-px",
          },
        },
        body: {
          true: {
            bottom: "mt-6",
          },
        },
      },
      compoundVariants: [
        {
          color: "primary",
          active: true,
          class: {
            link: "text-primary",
            linkLeadingIcon: "text-primary",
          },
        },
        {
          color: "neutral",
          active: true,
          class: {
            link: "text-highlighted",
            linkLeadingIcon: "text-highlighted",
          },
        },
      ],
      defaultVariants: {
        color: "primary",
        highlightColor: "primary",
      },
    },
    colors: {
      primary: "neutral",
      neutral: "violet",
    },
    button: {
      slots: {
        base: "rounded-full",
      },
    },
    pageHeader: {
      slots: {
        title: "post-title md:text-6xl text-5xl sm:text-5xl",
        description: "post-description text-current  text-xs lg:text-sm",
        headline: "post-headline pb-2 text-current uppercase text-xs lg:hidden",
        base: "border-4"
      },
    },
   pageBody: {
    base: "mt-0"
   },
    code: {
      slots: {
        base: "text-xs",
      },
    },
    commandPalette: {
      slots: {
        item: "items-center",
        input: "[&_.iconify]:size-4 [&_.iconify]:mx-0.5",
        itemLeadingIcon: "size-4 mx-0.5",
      },
    },
    contentNavigation: {
      slots: {
        root: "text-sm",
        linkLeadingIcon: "size-4 mr-1",
        linkTrailing: "hidden",
      },
      defaultVariants: {
        variant: "link",
      },
    },
    pageLinks: {
      slots: {
        linkLeadingIcon: "size-4",
        linkLabelExternalIcon: "size-2.5",
      },
    },
  },
});
