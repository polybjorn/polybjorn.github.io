---
name: 3D printer
tools: [CAD, CNC, FDM]
image: https://i.imgur.com/aRsPplF.jpg
description: Custom build
---

# Ratrig V-Core Pro 1.3

My conclusion have always been that I wish I didn't do this, but I'm happy now that it is finally working.

I'm using E3D Titan Aero extruder with EVA (v2.3.0) for linear rails and BLTouch. The printbed is custom-made tempered glass. Mount for electrical parts is truly a WIP, but I'm not in a rush to complete the polycarbonate casing just yet.

I'm using Duet3's MB6HC motherboard and using a Raspberry Pi 4 as host for the Duet webUI. Beyond writing the G-Code profiles, I'm pausing any improvements until I employ Ansible provisioning.

{% capture carousel_images %}
https://i.imgur.com/ctRrMb1.jpg
https://i.imgur.com/aRsPplF.jpg
https://i.imgur.com/WaC7mbD.jpg
{% endcapture %}
{% include elements/carousel.html %}