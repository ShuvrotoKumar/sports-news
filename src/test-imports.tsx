// Test file to verify imports
try {
  import('@/components/Header').then(module => {
    console.log('✅ Header imported successfully');
  }).catch(error => {
    console.error('❌ Header import failed:', error);
  });

  import('@/components/Hero').then(module => {
    console.log('✅ Hero imported successfully');
  }).catch(error => {
    console.error('❌ Hero import failed:', error);
  });
} catch (error) {
  console.error('Error in test-imports:', error);
}
