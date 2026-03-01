export function cloudinaryUrl(url, { width = 800, quality = 'auto' } = {}) {
  return url.replace('/image/upload/', `/image/upload/w_${width},f_auto,q_${quality}/`);
}

export const projects = [
  {
    title: "Raspberry Pi DIN Rail Mounts",
    category: "electronics",
    images: [
      {
        url: "https://res.cloudinary.com/djpkffk5u/image/upload/v1772266594/Raspberry_Pi_5_DIN_rail_assembly_1_wywxt2.jpg",
        alt: "Raspberry Pi 5 DIN rail assembly",
        title: "RPi 5 DIN Rail Mount",
        type: "render",
        transparent: false,
        link: "https://grabcad.com/library/raspberry-pi-5-din-rail-assembly-1",
      },
      {
        url: "https://res.cloudinary.com/djpkffk5u/image/upload/v1772266594/Raspberry_Pi_Compute_Module_4_DIN_rail_assembly_txil8q.jpg",
        alt: "Raspberry Pi Compute Module 4 DIN rail assembly",
        title: "RPi CM4 DIN Rail Mount",
        type: "render",
        transparent: false,
        link: "https://grabcad.com/library/raspberry-pi-compute-module-4-din-rail-assembly-1",
      },
      {
        url: "https://res.cloudinary.com/djpkffk5u/image/upload/v1772266594/Raspberry_Pi_4_DIN_rail_assembly_vek8o2.png",
        alt: "Raspberry Pi 4 DIN rail assembly",
        title: "RPi 4 DIN Rail Mount",
        type: "render",
        transparent: true,
        link: "https://grabcad.com/library/raspberry-pi-4b-din-rail-assembly-1",
      },
    ]
  },
{
  title: "Workshop & Storage",
  category: "workshop",
  images: [
    {
      url: "https://res.cloudinary.com/djpkffk5u/image/upload/v1772294256/French_cleats_spacer_-_assembled_pv2izn.png",
      alt: "French cleats spacer",
      title: "French Cleats Spacer",
      type: "render",
      transparent: true,
      link: "https://grabcad.com/library/french-cleats-spacer-1",
    },
  ]
},
{
  title: "Rat Rig V-Core Pro",
  category: "3dprinter",
  images: [
    {
      url: "https://res.cloudinary.com/djpkffk5u/image/upload/v1772294254/Rat_Rig_V-Core_Pro_1.3_XY_endstop_assembly_f2za2r.png",
      alt: "Rat Rig V-Core Pro XY endstop mount",
      title: "V-Core Pro XY Endstop Mount",
      type: "render",
      transparent: true,
      link: "https://grabcad.com/library/rat-rig-v-core-pro-1-3-xy-endstop-mount-1",
    },
    {
      url: "https://res.cloudinary.com/djpkffk5u/image/upload/v1772294254/Rat_Rig_V-Core_Pro_1.3_with_EVA_2.3.0_Titan_Aero_ljmwp4.png",
      alt: "Rat Rig V-Core Pro with EVA 2 Titan Aero",
      title: "V-Core Pro EVA 2 Titan Aero",
      type: "render",
      transparent: true,
      link: "https://grabcad.com/library/rat-rig-v-core-pro-1-3-with-eva-2-3-0-titan-aero-1",
    },
  ]
},
{
  title: "DIN Rail Mounts",
  category: "electronics",
  images: [
    {
      url: "https://res.cloudinary.com/djpkffk5u/image/upload/v1772294254/Duet_6HC_main_board_v1.0_DIN_rail_assembly_mc90vl.png",
      alt: "Duet 6HC DIN rail mount",
      title: "Duet 6HC DIN Rail Mount",
      type: "render",
      transparent: true,
      link: "https://grabcad.com/library/duet-6hc-main-board-din-rail-mount-1",
    },
    {
      url: "https://res.cloudinary.com/djpkffk5u/image/upload/v1772294459/LRS-350_PSU_DIN_rail_assembly_front_mw6xix.png",
      alt: "LRS-350 PSU DIN rail assembly",
      title: "LRS-350 PSU DIN Rail Mount",
      type: "render",
      transparent: true,
      link: "https://grabcad.com/library/lrs-350-psu-din-rail-assembly-1",
    },
    {
      url: "https://res.cloudinary.com/djpkffk5u/image/upload/v1772294458/SSR_DIN_rail_assembly_ymo4wd.png",
      alt: "Delixi SSR DIN rail assembly",
      title: "Delixi SSR DIN Rail Mount",
      type: "render",
      transparent: true,
      link: "https://grabcad.com/library/delixi-ssr-din-rail-assembly-1",
    },
  ]
},
{
  title: "Travel & Everyday",
  category: "everyday",
  images: [
    {
      url: "https://res.cloudinary.com/djpkffk5u/image/upload/v1772294458/Safety_razor_travel_case_v3_render_ytq48b.png",
      alt: "Safety razor travel case",
      title: "Safety Razor Travel Case",
      type: "render",
      transparent: true,
      link: "https://grabcad.com/library/safety-razor-travel-case-1",
    },
  ]
},
  {
    title: "TV Console",
    category: "furniture",
    images: [
      {
        url: "https://res.cloudinary.com/djpkffk5u/image/upload/v1772266485/TV_console_1_yobxuk.png",
        alt: "TV console",
        title: "TV Console",
        type: "render",
        transparent: true,
        link: "https://grabcad.com/library/tv-console-7",
      },
    ]
  },
  {
    title: "Naniwa Sharpening Stone Cases",
    category: "tools",
    images: [
      {
        url: "https://res.cloudinary.com/djpkffk5u/image/upload/v1772266354/naniwa-sharpening-stone-cases-1_fxru11.png",
        alt: "Naniwa sharpening stone cases",
        title: "Naniwa Stone Cases",
        type: "render",
        transparent: true,
        link: "https://grabcad.com/library/naniwa-sharpening-stone-cases-1",
      },
    ]
  },
{
  title: "Furniture & Workshop",
  category: "furniture",
  images: [
    {
      url: "https://res.cloudinary.com/djpkffk5u/image/upload/v1772294720/Conference_table_sxor9s.png",
      alt: "Interlocking conference table",
      title: "Interlocking Conference Table",
      type: "render",
      transparent: true,
      link: "https://grabcad.com/library/interlocking-conference-table-1",
    },
    {
      url: "https://res.cloudinary.com/djpkffk5u/image/upload/v1772294720/Drawer_section_tshird.png",
      alt: "Interlocking drawer section",
      title: "Interlocking Drawer Section",
      type: "render",
      transparent: true,
      link: "https://grabcad.com/library/interlocking-drawer-section-1",
    },
    {
      url: "https://res.cloudinary.com/djpkffk5u/image/upload/v1772294719/Workshop_caddy_jwgdj7.png",
      alt: "Interlocking workshop caddy",
      title: "Interlocking Workshop Caddy",
      type: "render",
      transparent: true,
      link: "https://grabcad.com/library/interlocking-workshop-caddy-1",
    },
    {
      url: "https://res.cloudinary.com/djpkffk5u/image/upload/v1772294718/Mobile_tool_organizer_pkcxkv.png",
      alt: "Mobile tool organizer",
      title: "Mobile Tool Organizer",
      type: "render",
      transparent: true,
      link: "https://grabcad.com/library/mobile-tool-organizer-1",
    },
    {
      url: "https://res.cloudinary.com/djpkffk5u/image/upload/v1772294718/Serving_boards_e15qaz.jpg",
      alt: "Serving boards",
      title: "Serving Boards",
      type: "render",
      transparent: false,
      link: "https://grabcad.com/library/serving-boards-1",
    },
    {
      url: "https://res.cloudinary.com/djpkffk5u/image/upload/v1772294718/Arkitektur_pegboard_bvcxah.jpg",
      alt: "Skap Kreativ pegboards",
      title: "Skap Kreativ Pegboards",
      type: "photo",
      transparent: false,
      link: "https://grabcad.com/library/skap-kreativ-folkehoyskole-pegboards-1",
    },
  ]
},
{
  title: "3D Printer Toolheads",
  category: "3dprinter",
  images: [
    {
      url: "https://res.cloudinary.com/djpkffk5u/image/upload/v1772294717/Revo_Hemera_XS_td679n.png",
      alt: "Revo Hemera XS MGN15",
      title: "Revo Hemera XS MGN15",
      type: "render",
      transparent: true,
      link: "https://grabcad.com/library/revo-hemera-xs-mgn15-1",
    },
  ]
},
]