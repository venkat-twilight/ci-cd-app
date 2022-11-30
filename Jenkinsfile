@Library('GTSO-CI-Jenkins-Library@dev') _
def build_config = [
    build_config: "build-info.yaml",
    snapshot_branch: "dev*",
    integration_branch: "integration*",
    verify_branch: "verify*",
    prod_branch: "dev*",
    deployment_configs: "deployment",
    jenkins_node_label: "jenkins_seo",
]
sboPipeline(this, build_config)