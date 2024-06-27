libraries {
  core {
    slack_channel = "media-management-alerts"
    node_label = 'docker-builds-slave'
    general = true
    github_packages = true

    semantic_release {
      enabled = true
      config_type = 'global'
      name = 'ngx-translate-testing'
      repository = 'safe-fleet/ngx-translate-plugins'
      artifacts = 'docker'
      issues = 'jira'
    }
  }

  nodejs {
    build_image = 'node:16.14.0-alpine'

    build {
      commands = 'npm ci,npm run build:lib:prod'
      pr_commands = 'npm ci,npm run lint:lib'
    }

    sonarqube_analysis {
      project_key = 'ngx-translate-plugins'
      project_name = 'ngx-translate-plugins'
      sources = 'src'
      exclusions = "**/node_modules,**/src/polyfills.ts,**/*.ts,src/typings.d.ts,**/sf-theme/**,**/*.css"
      coverage_exclusions = "**/*.spec.ts,**/*.module.ts,**/*.mock.ts,**/src/environments/**"
    }

    publish {
      project_folder = 'dist/testing'
    }
  }
}
