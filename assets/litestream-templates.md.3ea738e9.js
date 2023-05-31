import{_ as e,o as a,c as s,a as t,d as n}from"./app.2aea72c0.js";var o="/assets/litestream-mix-diagram-s3.12e2a8a7.png",r="/assets/cloudcraft-host-digram-release-docker-aws.951d4495.png";const S='{"title":"Litestream Mix Templates","description":"","frontmatter":{"slug":"litestream-templates","title":"Litestream Mix Templates"},"headers":[{"level":2,"title":"Docker Compose Template","slug":"docker-compose-template"},{"level":2,"title":"GitHub Action Workflow","slug":"github-action-workflow"},{"level":3,"title":"Working with AWS S3","slug":"working-with-aws-s3"},{"level":3,"title":"Working with Azure Blob Storage","slug":"working-with-azure-blob-storage"},{"level":3,"title":"Working with SFTP","slug":"working-with-sftp"}],"relativePath":"litestream-templates.md"}',p={},c=t('<p>The Litestream mix templates can incorporate the use of <a href="https://litestream.io" target="_blank" rel="noopener noreferrer">Litestream</a> into new ServiceStack project templates, providing an example of automated backup and restore functionality for SQLite applications.</p><p>Litestream runs as a dedicated <a href="https://docs.microsoft.com/en-us/azure/architecture/patterns/sidecar" target="_blank" rel="noopener noreferrer">sidecar</a> container watching for updates to your SQLite database, replicating those changes to your configured storage target like AWS S3, Azure Blob Storage, and SFTP.</p><p><img src="'+o+'" alt=""></p><p>The template provides two files that are designed follow the <a href="/github-action-templates.html">Linux SSH deployment using GitHub Actions</a> built into some templates.</p><p>Just like most of the ServiceStack project templates, it uses a single Linux host with Docker and Docker Compose running an NGINX container with Lets Encrypt companion to handle automated TLS certificate management. This could be on AWS, Azure, DigitalOcean or your own server, the only requirements are that it has SSH access, with Docker and Docker-Compose installed.</p><p><img src="'+r+`" alt=""></p><h2 id="docker-compose-template" tabindex="-1">Docker Compose Template <a class="header-anchor" href="#docker-compose-template" aria-hidden="true">#</a></h2><p>The <code>docker-compose-template.yml</code> uses the <code>depends_on</code> and <code>healthcheck</code> features of Docker-Compose to ensure a restore takes place before deployment unless a database file already exists locally or is missing on the target storage.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Ensure you have v2+ of Docker Compose A compatibility script can be used for <code>docker-compose</code> via the following script. <code>echo &#39;docker compose --compatibility &quot;$@&quot;&#39; &gt; /usr/local/bin/docker-compose</code><code>sudo chmod +x /bin/docker-compose</code></p></div><div class="language-yaml"><pre><code><span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">MyApp</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> ghcr.io/$<span class="token punctuation">{</span>IMAGE_REPO<span class="token punctuation">}</span><span class="token punctuation">:</span>$<span class="token punctuation">{</span>RELEASE_VERSION<span class="token punctuation">}</span>
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token key atrule">MyApp-litestream</span><span class="token punctuation">:</span>
        <span class="token key atrule">condition</span><span class="token punctuation">:</span> service_healthy
    <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> bridge
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;80&quot;</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">VIRTUAL_HOST</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>HOST_DOMAIN<span class="token punctuation">}</span>
      <span class="token key atrule">LETSENCRYPT_HOST</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>HOST_DOMAIN<span class="token punctuation">}</span>
      <span class="token key atrule">LETSENCRYPT_EMAIL</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>LETSENCRYPT_EMAIL<span class="token punctuation">}</span>
      <span class="token key atrule">DEPLOY_API</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>DEPLOY_API<span class="token punctuation">}</span>
      <span class="token key atrule">DEPLOY_CDN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span>DEPLOY_CDN<span class="token punctuation">}</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> MyApp<span class="token punctuation">-</span>mydb<span class="token punctuation">:</span>/app/App_Data
  <span class="token key atrule">MyApp-litestream</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> litestream/litestream
    <span class="token key atrule">entrypoint</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;/bin/sh&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-c&quot;</span><span class="token punctuation">]</span>
    <span class="token comment"># Timeout of health check will need to depend on size of db, and speed of network to host.</span>
    <span class="token key atrule">healthcheck</span><span class="token punctuation">:</span>
      <span class="token key atrule">test</span><span class="token punctuation">:</span> /usr/local/bin/litestream restore <span class="token punctuation">-</span>if<span class="token punctuation">-</span>db<span class="token punctuation">-</span>not<span class="token punctuation">-</span>exists <span class="token punctuation">-</span>if<span class="token punctuation">-</span>replica<span class="token punctuation">-</span>exists <span class="token punctuation">-</span>o /data/app.db s3<span class="token punctuation">:</span>//$<span class="token punctuation">{</span>AWS_S3_BUCKET<span class="token punctuation">}</span>/MyApp.sqlite
      <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 10m
      <span class="token key atrule">retries</span><span class="token punctuation">:</span> <span class="token number">1</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /usr/local/bin/litestream replicate /data/app.db s3<span class="token punctuation">:</span>//$<span class="token punctuation">{</span>AWS_S3_BUCKET<span class="token punctuation">}</span>/MyApp.sqlite
</code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Note the use of a 10-minute timeout for the restore process (<code>timeout: 10m</code>), this is sufficient for small SQLite databases, however, restore processes should always be tested for their specific use case.</p></div><p>During the GitHub Action release workflow, a Docker Compose YAML file is produced from the template, and copied to the Linux host before calling <code>docker-compose up</code> to run the Litestream process and application together.</p><p>Since Litestream is tied to deployment and hosting environment, we have made several templates that work with specific templates. Below is a table matching project templates to mix templates including different storage targets.</p><table><thead><tr><th>Project Template</th><th>AWS S3</th><th>Azure Blob Storage</th><th>SFTP (generic)</th></tr></thead><tbody><tr><td><strong>web</strong></td><td>litestream-aws</td><td>litestream-azure</td><td>litestream-sftp</td></tr><tr><td><strong>blazor-server</strong></td><td>blazor-litestream-aws</td><td>blazor-litestream-azure</td><td>blazor-litestream-sftp</td></tr><tr><td><strong>blazor-tailwind</strong></td><td>blazor-litestream-aws</td><td>blazor-litestream-azure</td><td>blazor-litestream-sftp</td></tr><tr><td><strong>blazor-wasm</strong></td><td>blazor-litestream-aws</td><td>blazor-litestream-azure</td><td>blazor-litestream-sftp</td></tr><tr><td><strong>vue-ssg</strong></td><td>jamstack-litestream-aws</td><td>jamstack-litestream-azure</td><td>jamstack-litestream-sftp</td></tr><tr><td><strong>vue-vite</strong></td><td>jamstack-litestream-aws</td><td>jamstack-litestream-azure</td><td>jamstack-litestream-sftp</td></tr><tr><td><strong>nextjs</strong></td><td>jamstack-litestream-aws</td><td>jamstack-litestream-azure</td><td>jamstack-litestream-sftp</td></tr></tbody></table><h2 id="github-action-workflow" tabindex="-1">GitHub Action Workflow <a class="header-anchor" href="#github-action-workflow" aria-hidden="true">#</a></h2><p>To automate deployment, creation of additional GitHub Action Secrets is required. Below is a list of the name of the secrets related to the type of storage target used.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>If you are using the template GitHub Actions and deploying to an Ubuntu 22.04 server, ensure you ssh key is generated using non RSA SHA1 algorithm. Eg <code>ssh-keygen -t ecdsa</code> or swap out the use of <code>appleboy/scp-action@v0.1.3</code> for your own step using the latest version of the <code>scp</code> command line tool in your CI environment. For a step by step and other options, see <a href="https://askubuntu.com/a/1409528/366659" target="_blank" rel="noopener noreferrer">this Ask Ubuntu Answer</a></p></div><p>For a detailed overview for creating and setting up deployment for a new App from scratch checkout:</p>`,18),i=n("iframe",{class:"video-hd",src:"https://www.youtube.com/embed/fY50dWszpw4",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""},null,-1),l=t('<h3 id="working-with-aws-s3" tabindex="-1">Working with AWS S3 <a class="header-anchor" href="#working-with-aws-s3" aria-hidden="true">#</a></h3><table><thead><tr><th>GitHub Secret Name</th><th>Description</th><th>Example</th></tr></thead><tbody><tr><td>AWS_S3_BUCKET</td><td>Name of the S3 bucket for Litestream to target</td><td>my-bucket-name</td></tr><tr><td>AWS_ACCESS_KEY_ID</td><td>AWS IAM user Access Key for programmatic access</td><td>AKIAIOSFODNN7EXAMPLE1</td></tr><tr><td>AWS_SECRET_ACCESS_KEY</td><td>AWS IAM user access secret for programmatic access</td><td>abcd1234abcd1234</td></tr></tbody></table><h3 id="working-with-azure-blob-storage" tabindex="-1">Working with Azure Blob Storage <a class="header-anchor" href="#working-with-azure-blob-storage" aria-hidden="true">#</a></h3><table><thead><tr><th>GitHub Secret Name</th><th>Description</th><th>Example</th></tr></thead><tbody><tr><td>AZURE_ACCOUNT_KEY</td><td>Azure account key, accessible under Storage Accounts, Access Keys</td><td>tEst123/tEst123/tEst123/tEst123==</td></tr><tr><td>AZURE_STORAGEACCOUNT</td><td>Azure Storage Account name</td><td>mystorageaccountname</td></tr><tr><td>AZURE_CONTAINER</td><td>Azure Storage Container name</td><td>my-storage-container</td></tr></tbody></table><h3 id="working-with-sftp" tabindex="-1">Working with SFTP <a class="header-anchor" href="#working-with-sftp" aria-hidden="true">#</a></h3><table><thead><tr><th>GitHub Secret Name</th><th>Description</th><th>Example</th></tr></thead><tbody><tr><td>SFTP_USERNAME</td><td>SFTP Username for authentication</td><td>username</td></tr><tr><td>SFTP_PASSWORD</td><td>SFTP Password for authentication</td><td>password</td></tr><tr><td>SFTP_HOST</td><td>SFTP domain name or IP address</td><td><a href="http://sftp.example.com" target="_blank" rel="noopener noreferrer">sftp.example.com</a></td></tr><tr><td>SFTP_PORT</td><td>SFTP port used to access</td><td>22</td></tr></tbody></table>',6),d=[c,i,l];function u(m,k,h,g,b,f){return a(),s("div",null,d)}var w=e(p,[["render",u]]);export{S as __pageData,w as default};
