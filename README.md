# fnx320-aao-scripts

Lorby SI's Axis and Ohs Scripts for the Fenix A320.

**This is a work in progress. Only the FCU and external lighting have been mapped so far.**

## Installation

Download the `fnx320_scripts.xml` file from
the [latest release](https://github.com/alexcrawford/fnx320-aao-scripts/releases/latest) and import this file using
the `Scripting > Import scripts` option in AAO.

This will only import the scripts. You will need to assign these to your device.

I've included a basic template for the Honeycomb Bravo in the `examples` directory.

## Development

Data for the scripts is stored in the `groups` directory. These are organised based on their location in the flight deck.

The `build` command parses this data, uses EJS templates to generate the required RPN, and then writes the output to an XML file
that can be imported to AAO.

### Installation
Clone the repo, then run:
```bash
npm install
```

### Compilation

```bash
npm run build
```
