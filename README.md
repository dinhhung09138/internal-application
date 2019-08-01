# internal-application
None
## **Modules** folder
- Designated folders for pages and component
## **Core** folder
- Take on the role of the **AppModule**
- Should contain singleton services, universal components and other features where there's only once instance per application
- To prevent re-importing the core module elsewhere, you should add a guard for it in the core's module