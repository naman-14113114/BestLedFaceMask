import { execSync } from 'child_process';

function checkSync() {
  console.log('🔄 Checking if your local repository is up to date with GitHub...');

  try {
    // 1. Fetch latest from origin
    execSync('git fetch origin', { stdio: 'ignore' });
    
    // 2. Check if branch is behind origin
    const status = execSync('git status -uno', { encoding: 'utf-8' });
    
    if (status.includes('Your branch is behind')) {
      console.error('\n❌ ERROR: take latest git pull before pushing code!');
      console.error('Your local branch is behind origin. Please run `git pull` first.\n');
      process.exit(1); // Block the push/build
    }
    
    console.log('✅ Local repository is up to date. Proceeding...');
  } catch (error) {
    // If git fetch fails (e.g., offline or on Vercel servers where git auth might fail), 
    // we don't strictly block it, just warn.
    console.warn('⚠️ Could not verify git status. Skipping sync check.');
  }
}

// Only run the check if we are NOT on Vercel servers
if (process.env.VERCEL !== '1') {
  checkSync();
} else {
  // If we are on Vercel servers, we want to block manual deployments (Vercel CLI).
  // VERCEL_GIT_PROVIDER is only present when GitHub triggers the build automatically.
  if (!process.env.VERCEL_GIT_PROVIDER) {
    console.error('\n❌ ERROR: Manual Vercel CLI deployments are blocked.');
    console.error('Please push to GitHub instead. Vercel will deploy automatically.\n');
    process.exit(1);
  }
}
