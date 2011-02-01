# ===========================================================================
# Project:   Player
# Copyright: ©2011 My Company, Inc.
# ===========================================================================

# Add initial buildfile information here
config :all, :required => [:sproutcore, 'sproutcore/table']

proxy "/assets", :to => "localhost:3000"
