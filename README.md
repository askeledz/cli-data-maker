## CLI Data Maker
  - git clone
  - npm install -g .


**Usage:**
    
    > cdm -c <sumple_count> -s <sample_name_prefix>

**Options:**

    > --help              Show help                                        [boolean]
 
    > --version           Show version number                              [boolean]
 
    > -c, --count         Sample count                           [number] [required]
 
    > -s, --sampleprefix  Sample prefix                          [string] [required]

**e.g.**
    
    > node ./bin/index.js -c 100 -s AS
    OR
    > cdm -c 100 -s
  
    > Results: Sample: ESP1590489444297 Time: 0:30

**Debugging**

- Place the word "debugger" anywhere you want to stop execution. 
- Run the program with node inspect (e.g. node **inspect** ./bin/index.js -c 100 -s AS).
- Open Chrome and type "chrome://inspect/#devices" in the address bar.
- Under the section import, set the following::
    - localhost:9229
    - 127.0.0.1:9229
- Remote Target should show two identical apps running.
- Click Inspect.
- Add Project folder to Workspace.
- Switch console ON and OFF by hitting ESC button.
- Resume Script execution.
- When debugger stops, you can inspect variables under console.
