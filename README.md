# Mapping Early Modern Violence

This repository contains code, documentation, and related resources for the Mapping Early Modern Violence project at the [Roy Rosenzweig Center for History and New Media](https://rrchnm.org). This project displays violent crime data in order to allow researchers, historians, and anthropologists to find new trends between violence and geographic space in history that would otherwise be difficult to determine.

# Project Team

- Dr. Amanda Madden (PI)
- Dr. Jason Heppler (senior developer) 
- James Ball
- Ethan Haarer
- Owen Huggins
- Caleb McFarland
- Hannah Wysocki

# Installation Guide

### Pre-Requisites

  You must have an operating system and hardware that can support Docker. The information for this can be found here. [Windows](https://docs.docker.com/desktop/install/windows-install/), [Mac](https://docs.docker.com/desktop/install/mac-install/), [Linux](https://docs.docker.com/desktop/install/linux-install/)
  You also must have Python 3.8 or a later version installed. Information on how to download Python can be found [here](https://www.python.org/downloads/).

  


# Release Notes

## Version 0.4.0

### New Features
- Created search functionality for cities and locations
- Created keyword search for different crimes
- Added a button to recenter the map
- Implemented ability to add pins to the map to mark locations

### Bug Fixes
- Fixed filtering bug where filtering no longer worked after reseting the filters
- Fixed UI bug concerning reseting the filters and the conviction radio buttons
- Fixed error alert when returning to registration/login page

### Known Issues
- Uploaded data doesn't get filtered by the weapon filtering

## Version 0.3.0

### New Features
- Created data download functionality
- Added user ability to add data to their local view of the map
- Added admin registration and login
- Updated filtering system to show a dynamic list of all weapon types mapped

### Bug Fixes
- Fixed the timeline slider bug so that the UI slider updates on drag

### Known Issues
- If not resolved before visiting a different page, registration and login error popups will reappear when the user returns to the registration/login page

## Version 0.2.0

### New Features
- Added more data to our database
- Added a coordinate field to data to allow for more accurate plotting
- Added clustering of data points such that when you zoom in and out, data is clustered based on relative distance
- Added filtering of data based on the weapon used and conviction type
- Added a time slider to filter data based on the year the crime was committed

### Bug Fixes
- Fixed zoom issues, you can now see all of Italy and zoom in and out

### Known Issues
- Although its functionality is correct, the actual time slider component of the user interface does not slide
## Version 0.1.0

### New Features
- Added map of Italy
- Map can be navigated
- Map can be zoomed in and out
- Data points appear on Map
- Data points can be clicked to see more information

### Bug Fixes
- Ajusted map to view all of Italy
- No longer able to break out of map bounds

### Known Issues
- Can't zoom out to see all of Italy
