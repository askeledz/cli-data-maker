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
