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
    
    > node ./bin/index.js -c 100 -s
    OR
    > cdm -c 100 -s
  
    > Results: Sample: ESP1590489444297 Time: 0:30

**Debugging**

- Set "debugger" word anywhere you want execution stop. 
- Run the program.
- Open Chrome and type "chrome://inspect/#devices" in the address bar.
- Under configure section import following:
    - localhost:9229
    - 127.0.0.1:9229
- Remote Target should show two identical apps running.
- Click Inspect.
- Add Project folder to Workspace.
- Switch console ON and OFF by hitting ESC button.
- Resume Script execution.
- When debugger stops, you can inspect variables under console.