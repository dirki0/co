export default defineAppConfig({
  header: {
    title: "Chidi Odili ist ein bildender Künstler",
  },
  docus: {
    locale: "de",
  },
  seo: {
    title: "Chidi Odili",
    description: "Chidi Odili ist ein bildender Künstler",
  },
  ui: {
    popover:{
      slots:{content:"popover-component"}
    },
    pageHero:{
      slots:{headline:"pb-2 text-xs sm:text-base"}
    },
    separator:{
      slots: {root:"border-current/7"},
    },
    header: {
      slots: { root: "border-current/7" },
    },
    prose: {
      a: {
        base: "font-[300] text-current border-b border-current",
      },
    },
    table: {
      slots: {
        root: "relative overflow-auto",
        base: "min-w-full",
        caption: "sr-only",
        thead: "relative",
        tbody:
          "isolate [&>tr]:data-[selectable=true]:hover:bg-elevated/50 [&>tr]:data-[selectable=true]:focus-visible:outline-primary",
        tfoot: "relative",
        tr: "data-[selected=true]:bg-elevated/50",
        th: "px-4 py-3.5 text-sm text-highlighted text-left rtl:text-right font-semibold [&:has([role=checkbox])]:pe-0",
        td: "p-4 text-sm text-muted whitespace-nowrap [&:has([role=checkbox])]:pe-0",
        separator: "absolute z-1 left-0 w-full h-px bg-(--ui-border-accented)",
        empty: "py-6 text-center text-sm text-muted",
        loading: "py-6 text-center",
      },
      variants: {
        virtualize: {
          false: {
            base: "overflow-clip",
            tbody: "divide-y divide-default",
          },
        },
        pinned: {
          true: {
            th: "sticky bg-default/75 z-1",
            td: "sticky bg-default/75 z-1",
          },
        },
        sticky: {
          true: {
            thead: "sticky top-0 inset-x-0 bg-default/75 backdrop-blur z-1",
            tfoot: "sticky bottom-0 inset-x-0 bg-default/75 backdrop-blur z-1",
          },
          header: {
            thead: "sticky top-0 inset-x-0 bg-default/75 backdrop-blur z-1",
          },
          footer: {
            tfoot: "sticky bottom-0 inset-x-0 bg-default/75 backdrop-blur z-1",
          },
        },
        loading: {
          true: {
            thead: "after:absolute after:z-1 after:h-px",
          },
        },
        loadingAnimation: {
          carousel: "",
          "carousel-inverse": "",
          swing: "",
          elastic: "",
        },
        loadingColor: {
          primary: "",
          secondary: "",
          success: "",
          info: "",
          warning: "",
          error: "",
          neutral: "",
        },
      },
      compoundVariants: [
        {
          loading: true,
          loadingColor: "primary",
          class: {
            thead: "after:bg-primary",
          },
        },
        {
          loading: true,
          loadingColor: "neutral",
          class: {
            thead: "after:bg-inverted",
          },
        },
        {
          loading: true,
          loadingAnimation: "carousel",
          class: {
            thead:
              "after:animate-[carousel_2s_ease-in-out_infinite] rtl:after:animate-[carousel-rtl_2s_ease-in-out_infinite]",
          },
        },
        {
          loading: true,
          loadingAnimation: "carousel-inverse",
          class: {
            thead:
              "after:animate-[carousel-inverse_2s_ease-in-out_infinite] rtl:after:animate-[carousel-inverse-rtl_2s_ease-in-out_infinite]",
          },
        },
        {
          loading: true,
          loadingAnimation: "swing",
          class: {
            thead: "after:animate-[swing_2s_ease-in-out_infinite]",
          },
        },
        {
          loading: true,
          loadingAnimation: "elastic",
          class: {
            thead: "after:animate-[elastic_2s_ease-in-out_infinite]",
          },
        },
      ],
      defaultVariants: {
        loadingColor: "primary",
        loadingAnimation: "carousel",
      },
    },
    contentToc: {
      slots: {
        root: "sticky top-(--ui-header-height) z-10 bg-default/75 lg:bg-[initial] backdrop-blur -mx-4 px-4 sm:px-6 sm:-mx-6 overflow-y-auto max-h-[calc(100vh-var(--ui-header-height))]",
        container:
          "pt-4 sm:pt-6 pb-2.5 sm:pb-4.5 lg:py-8 border-b border-dashed border-current/7 lg:border-0 flex flex-col",
        top: "",
        bottom: "hidden lg:flex lg:flex-col gap-6",
        trigger:
          "toc-title lg:pl-4.5 pl-5 group text-sm font-light flex-1 flex items-center gap-1.5 py-1.5 -mt-1.5 focus-visible:outline-primary",
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
        link: "text-default uppercase group relative text-sm flex items-center focus-visible:outline-primary py-0.5",
        linkText:
          "truncate hover:text-primary active:border-current border-b border-transparent",
        indicator:
          "absolute indicator-dot ms-2.5 transition-[translate,height] duration-200 h-3 translate-y-(--indicator-position) w-px rounded-full",
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
            link: ["text-current hover:text-default", "transition-colors"],
          },
        },
        highlight: {
          true: {
            list: "ms-2.5 ps-2 ",
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
    contentSurround: {
      slots: {
        linkLeadingIcon: "group-hover:text-current",
        link: "hover:bg-transparent hover:border-current/20  active:border-current",
        linkLeading: [
          "group-hover:bg-transparent bg-transparent ring ring-accented mb-4 group-hover:ring-current",
          "transition",
        ],
        linkTitle: "font-[300] text-sm text-highlighted mb-1 truncate",
        linkDescription: "font-[300] text-sm text-muted line-clamp-2",
      },
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
        base: "border-4",
      },
    },
    pageBody: {
      base: "mt-0",
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
        root: "uppercase ms-0",
        linkLeadingIcon: "size-4 mr-1",
        linkTrailing: "hidden",
        linkTitle:
          "text-current border-b border-transparent hover:text-primary active:border-current active:border-b active:text-current -tracking-[0.1rem] lg:tracking-normal font-[200] lg:font-[300] lg:pt-1 pb-0 pt-0.5 text-4xl lg:text-xs",
        link: "p-0",
      },
      variants: {
        active: {
          true: {
            link: "font-medium",
          },
          false: {
            link: "text-current",
            linkLeadingIcon: "text-dimmed",
          },
        },
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
